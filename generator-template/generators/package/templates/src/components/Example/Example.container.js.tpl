// @flow

import { connect } from 'react-redux';

import { actionCreators, selectors } from 'shared-components-<%= name %>/redux/<%= capitalizeName %>';
import <%= capitalizeName %> from './<%= capitalizeName %>.component';

const mapStateToProps = state => ({
  foo: selectors.foo(state),
  loading: selectors.actionFooLoading(state),
  failed: selectors.actionFooFailed(state),
});

const mapDispatchToProps = {
  requestActionFooStart: (foo: string) =>
    actionCreators.requestActionFooStart(foo),
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(<%= capitalizeName %>);
