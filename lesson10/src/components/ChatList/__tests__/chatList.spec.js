import { ChatItem } from '../ChatItem/ChatItem';
import { Provider } from 'react-redux';
import { store } from "../../../store/index";
import { ChatList } from '../ChatList';
import { FormComponent } from '../../../components/FormComponent/FormComponent';
import { render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ChatList', () => {
    it('', () => {
        const handleDeleteChat = jest.fn();
        const onAddChat = jest.fn();

        const component = render(
            <Provider store={store}>
                <ChatList>
                    <ChatItem key='chat.id' chat='name' text='test name' onDelete={handleDeleteChat} />
                    <FormComponent onSubmit={onAddChat} />
                </ChatList>
            </Provider>
        );

        const submitBtn = component.getByText('Send');

        act(() =>{
            fireEvent.click(submitBtn)
        });

        expect(submitBtn).toBeDefined();
    });

    it("matches snapshot", () => {
        const handleDeleteChat = jest.fn();
        const onAddChat = jest.fn();

        const component = render(
            <Provider store={store}>
                <ChatList>
                    <ChatItem key='chat.id' chat='name' text='test name' onDelete={handleDeleteChat} />
                    <FormComponent onSubmit={onAddChat} />
                </ChatList>
            </Provider>
        );

        expect(component).toMatchSnapshot();
    });
});