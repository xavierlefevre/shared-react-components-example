// @flow

import React from 'react';

import Style from './<%= capitalizeName %>.style';

<%_if (includeRedux) { -%>
type PropsType = {
  foo: string,
  requestActionFooStart: string => void,
  loading: boolean,
  failed: boolean,
};
type StateType = {
  title: string,
};

export default class <%= capitalizeName %> extends React.Component<PropsType, StateType> {
  static defaultProps = {
    messages: [],
  };

  state = {
    title: '<%= capitalizeName %>',
  };

  componentWillMount() {
    this.props.requestActionFooStart('hello');
  }

  render() {
    return (
      <Style.Container>
        {this.props.loading && (<div>Loading</div>)}
        {this.props.failed && (<div>failed</div>)}
        <div>Hello {this.state.title}</div>
        {this.props.foo && (
          <Style.Data isBold={false}>
            Result of API : {JSON.stringify(this.props.foo, null, 2)}
          </Style.Data>
        )}
      </Style.Container>
    );
  }
}
<%_ } -%>
<%_if (!includeRedux) { -%>
type PropsType = {
  message: string,
};

export default (props: PropsType) => (
  <Style.Container>{props.message}</Style.Container>
);
<%_ } -%>
