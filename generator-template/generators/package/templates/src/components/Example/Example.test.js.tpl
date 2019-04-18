import React from 'react';
import renderer from 'react-test-renderer';

import <%= capitalizeName %> from './<%= capitalizeName %>.component';

describe('<<%= capitalizeName %> />', () => {
  it('should be defined', () => {
    const component = renderer.create(
      <%_if (includeRedux) { -%>
      <<%= capitalizeName %> requestActionFooStart={() => {}} />
      <%_ } -%>
      <%_if (!includeRedux) { -%>
      <<%= capitalizeName %> message="hello world" />
      <%_ } -%>
    );
    expect(component).toBeDefined();
  });
});
