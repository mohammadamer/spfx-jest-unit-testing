import * as React from 'react';
import { ActionButton } from '@fluentui/react';
import { override } from '@microsoft/decorators';
import { ICustomActionButtonState } from './ICustomActionButton';

export default class CustomActionButton extends React.PureComponent<{}, ICustomActionButtonState> {
    public constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    public toggleForm = () => this.setState({ isOpen: !this.state.isOpen });

    @override
    public render(): React.ReactElement {
        return (
            <div>
                <ActionButton onClick={this.toggleForm} allowDisabledFocus>
                    {"Action Button"}
                </ActionButton>
            </div>
        );
    }
}