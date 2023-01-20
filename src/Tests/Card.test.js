
import {render, screen ,cleanup} from "@testing-library/react";
import Card from "../Components/Card";

afterEach(() => {
    cleanup();
});

test('Is Card component rendered?', () => {
    render(<Card/>);
    const cardElement = screen.getByTestId('card-1');
    expect(cardElement).toBeInTheDocument();
})