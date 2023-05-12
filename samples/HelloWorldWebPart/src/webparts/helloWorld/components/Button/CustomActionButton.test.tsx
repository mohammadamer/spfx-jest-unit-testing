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
        console.log(screen.debug());
        const actionButtonElement = screen.queryByText(/Action Button/);
        expect(actionButtonElement).toBeInTheDocument();
    });
});
