import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ConfirmDialog from '../src/ConfirmDialog.js';


describe('Mount and Render tests', () => {
    it('should mount in a full DOM', () => {
        expect(mount(<ConfirmDialog />).find('.react-confirm-dialog-bg').length).toBe(1);
    });
    it('should render properly', () => {
        expect(render(<ConfirmDialog />).find('.react-confirm-dialog-bg').length).toBe(1);
    });

    
});

describe('Prop change tests', () => {
    const dialog = mount(
        <ConfirmDialog confirmMessage="Hello World" confirmText="Confirm" cancelText="Cancel" />
    );
    it('Should change confirm message', () => {
        expect(dialog.find('p').text()).toEqual('Hello World');

        // Change the message
        dialog.setProps({
            confirmMessage: 'Goodbye World'
        }, () => {
            //Expect the new message to appear
            expect(dialog.find('p').text()).toEqual('Goodbye World');
        });
    });

    it('Should change confirm button text', () => {
        expect(dialog.find('.react-confirm-dialog-button.confirm').text()).toEqual('Confirm');

        // Change the text
        dialog.setProps({
            confirmText: 'Yes'
        }, () => {
            //Expect the new text to appear
            expect(dialog.find('.react-confirm-dialog-button.confirm').text()).toEqual('Yes');
        });
    });

    it('Should change cancel button text', () => {
        expect(dialog.find('.react-confirm-dialog-button.cancel').text()).toEqual('Cancel');

        // Change the text
        dialog.setProps({
            cancelText: 'No'
        }, () => {
            //Expect the new text to appear
            expect(dialog.find('.react-confirm-dialog-button.cancel').text()).toEqual('No');
        });
    });
});

describe('Actions tests', () => {
    let dialog = shallow(
        <ConfirmDialog action={(args) => { return args.a+args.b; } } actionArgs={{a:1,b:2}} />
    );
    let button = dialog.find('.react-confirm-dialog-button.confirm');
    it('should trigger action that returns sum of args', () => {
        expect(
            dialog.instance().executeAction()
        ).toEqual(3);

        // Change the args
        dialog.setProps({
            actionArgs: {a:2,b:2}
        }, () => {
            expect(
                dialog.instance().executeAction()
            ).toEqual(4);
        });
    });

    it('should close the component after triggering action when action button is clicked', () => {
        dialog.find('.react-confirm-dialog-button.confirm').simulate('click', () => {
            expect(
                dialog.find('.react-confirm-dialog-bg').length
            ).toBe(0);
        });
        
    });

    it('should close the component when cancel button is clicked', () => {
        dialog.find('.react-confirm-dialog-button.cancel').simulate('click', () => {
            expect(
                dialog.find('.react-confirm-dialog-bg').length
            ).toBe(0);
        });
        
    });
});
