import { render, screen, fireEvent } from "@testing-library/react";
import { Message } from "../Messages"

describe('Message component', () => {
    it('renders user name if not you', () => {
        render(<Message author="bot" text="test text" />);

        const el = screen.getByText('bot: test text');
        fireEvent(el, new MouseEvent('click'));

        expect(el).toBeDefined();
    });
    it('matches snapshot', () => {
        const component = render(<Message author="bot" text="test text" />);
        expect(component).toMatchSnapshot();
    });
});