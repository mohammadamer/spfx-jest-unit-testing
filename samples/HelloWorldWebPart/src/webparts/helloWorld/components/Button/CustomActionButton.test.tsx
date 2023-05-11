/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomActionButton from './CustomActionButton';
import "@testing-library/jest-dom";

describe("Action button functionality", () => {
    beforeEach(() => {
        render(<CustomActionButton />);
    });

    it('Should display Action button in the beginning', () => {
        const actionButtonElement = "Action Button";//screen.getByText(strings.GiveFeedbackButtonTitle);
        expect(actionButtonElement).toBeInTheDocument();
    });
});
