// @flow

<%_if (includeRedux) { -%>
export { default as <%= capitalizeName %> } from './<%= capitalizeName %>.container';
<%_ } -%>
<%_if (!includeRedux) { -%>
export { default as <%= capitalizeName %> } from './<%= capitalizeName %>.component';
<%_ } -%>
