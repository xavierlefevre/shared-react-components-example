# [WIP] How to efficiently fetch widget data from API

## Why

- When composing a new product with several widgets, it is way easier to use the "container" version than the "component" one, as they work "out of the box".
- However, each widget you use will then make its own requests which is very inefficient as it increases charge on servers and makes the client wait longer to see the page. Here's an example:
  - The "Client Reporting" project developed a "Factsheet" -- a page that displayed financial data of a given fund. Factsheet used several container components from the @shared-components/molecules package.
  - Each of these containers fetched data using API like `/fundsheet` and `/marketing-text`.
  - Several containers required data from the same API. For example, Factsheet contained three instances of MarketingText widget. Each widget made its own call to the `/marketing-text` API even though the response contained the data for all three widgets. This resulted in three API calls when just one would have been enough.
- The optimal way of fetching data would be to call each required API exactly once and then pass the data to widgets.

## Solution

- Shared Components team created a function that
  - takes as input a list of widgets that need data
  - based on this widget list, makes necessary API calls
  - returns data required by each widget as a `{widgetName: data}` object.
- Use this function to fetch data for all widgets.

The function is available in the `widgets` package:

```javascript
import {fetchWidgetData} from '@shared-components/molecules';
```

## How to use dataFetching

### Fetching data for one widget

Suppose we need to fetch the data for the `RiskAnalysis` widget.

```javascript
import React from 'react';
import {
    fetchWidgetData,
    riskAnalysisName,  // this constant contains official name for the RiskAnalysis widget
    RiskAnalysis
} from '@shared-components/molecules';
import {ErrorMessage, LoadingSpinner} from 'utils-library';

class FundData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            failed: false,
            fundsheetParams: {  // you should dynamically adjust those depending on the fund
                segment: 'IP_FR-IND',
                language: 'FRE',
                country: 'FRA',
                isin: 'FR0010668145',
            },
        };
    }

    componentDidMount() {
        this.getWidgetData();
    }

    async getWidgetData() {
        try {
            const widgetData = fetchWidgetData(
                [riskAnalysisName],  // list of widgets that need data
                {
                    fundsheetParams: this.state.fundsheetParams,  // parameters for calling /fundsheet API
                },
            );
            this.setState({
                loading: false,
                widgetData: widgetData[widgetData.defaultCurrency],
            });
        } catch(err) {
            this.setState({ loading: false, failed: true });
        }
    }

    render() {
        return (
            this.state.loading 
                ? <LoadingSpinner />
                : (
                    this.state.failed
                        ? <ErrorMessage />
                        : <RiskAnalysis data={this.state.widgetData[riskAnalysisName]} />
                )
        );
    }
}
```

### Fetching data for widget that uses parameters

Suppose that in addition to `RiskAnalysis` we also need to display a `MarketingText`.
We need to modify the call to `fetchWidgetData` as follows:

```javascript

class FundData extends React.Component {
    ...
    async getWidgetData() {
        ...
        const widgetData = fetchWidgetData(
            [riskAnalysisName, marketingTextName],  // we add MarketingText here
            {
                fundsheetParams: this.state.fundsheetParams,
                marketingTextParams: {  // parameters for calling /marketing-text API
                    profile: this.state.fundsheetParams.segment
                }  
            },
            {
                [marketingTextName]: {  // parameters for MarketingText widget 
                    language: 'FRE',
                }
            }
        );
        ...
    }

    render() {
        return (
            ...
            <React.Fragment>
                <RiskAnalysis data={this.state.widgetData[riskAnalysisName]} />
                <MarketingText data={this.state.widgetData[marketingTextName]} />
            </React.Fragment>
            ...
        )
    }
}
```


### Using custom modelizers

API responses serve as data sources for the widgets. You may need to get some data from API that is not related to any widget.
To address this need, `fetchWidgetData` has a `customModelizers` argument.

Let's suppose that in the previous example in addition to displaying `RiskAnalysis` widget the `FundData` component should display the name of the fund.

```javascript

// this is the custom modelizer that we will use to get a part of the API reponse that contains the fund name
const fundNameModelizer = (apiResponse) => (apiResponse.fundName);

class FundData extends React.Component {
    ...
    async getWidgetData() {
        ...
        const widgetData = fetchWidgetData(
            ...
            {FundName: fundNameModelizer},  // pass an object of custom modelizers as the last argument
        );
        ...
    }

    render() {
        return (
            ...
            <React.Fragment>
                <div>{this.state.widgetData.FundName}</div>  // custom data is retrieved using the key provided in custom modelizers object
                <RiskAnalysis data={this.state.widgetData[riskAnalysisName]} />
            </React.Fragment>
            ...
        )
    }
}
```

## Details on the `fetchWidgetData` function

### Accepted arguments

`fetchWidgetData` has the following arguments:

- `widgetList`: an array of names of widgets for which data should be retrieved
- `APICallParameters`: an object of parameters required to perform API calls. It has several properties, each property corresponding to an API:
  - `fundsheetParams`: for /fundsheet API
  - `marketingTextParams`: for /marketing-text API
  - `navGraphParams`: for /navs API
  - `performanceGraphParams`: for /perf-graph API
- `widgetParams`: an object of parameters required by some widgets. The structure is `widgetName: parameters`  // TODO: which widgets requires widgetParams to be passed here?
- `customModelizers`:  an object of custom modelizers for getting data from API in addition to data for widgets. The structure is `customName: modelizerFunction`.

### Internal logic

1. In order to know which data to retrieve for which widget, `fetchWidgetData` defines a `widgetToModelizer` object. Its properties are widget names and its values -- modelizer function for corresponding widgets.
2. We merge the contents of `customModelizers` into `widgetToModelizer`.
3. We call required API endpoints based on the content of `APICallParameters`.
4. We iterate over the union of `widgetList` and keys of `customWidgets` and for each widget or custom name call the corresponding modelizer passing to it API data and corresponding `widgetParams` if any.
5. As a result, we get a `{widgetName: widgetData}` object that is returned.

## Adding support for new widget

To add support for a new widget to `fetchWidgetData`:

1. Add it to `widgetToModelizer`.
2. If the widget's modelizer requires parameters in addition to the API data, add a corresponding if-clause to the data-processing loop.
