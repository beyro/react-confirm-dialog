import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ConfirmLink from '../src/ConfirmLink.js';


describe('Mount and Render test suite', function() {
    it('should mount in a full DOM', function() {
        expect(mount(<ConfirmLink />).find('.ReactConfirmLink').length).toBe(1);
    });
    it('should render properly', function() {
        expect(render(<ConfirmLink />).find('.ReactConfirmLink').length).toBe(1);
    });

    
});

test('render Dialog when link is clicked', function() {
    const cLink = shallow(
        <ConfirmLink />
    );
    
    // Expect no Dialog by default
    expect(cLink.find('.ReactConfirmDialog').length).toBe(0);

    // Simulate click
    cLink.find('.ReactConfirmLink').simulate('click');

    //Expect the dialog to appear after a click
    expect(cLink.find('.ReactConfirmDialog').length).toBe(1);
});