import chatReducer from './chatReducer';
import { loadingChats, sendMessage } from './chatActions';

describe('chatReducer', () => {

    it('loadingChats', () => {
        const store = { isLoading: false };
        const action = loadingChats();

        expect(chatReducer(store, action)).toMatchObject({ isLoading: true })
    })

    it('sendMessage', () => {
        const name = 'Ivan';
        const content = 'Hello!';
        const store = { items: { 1: { messages: [] } } };
        const action = sendMessage(1, name, content);

        expect(chatReducer(store, action)).toMatchObject(
            { items: { 1: { messages: [{ name, content }] } } }
        )
    });

    it('sendMessage add message to end of message array', () => {
        const testMessage = { name: 'Petr', content: 'Test message' };
        const name = 'Ivan';
        const content = 'Hello!';
        const store = { items: { 1: { messages: [testMessage] } } };
        const action = sendMessage(1, name, content);

        expect(chatReducer(store, action)).toMatchObject(
            { items: { 1: { messages: [testMessage, { name, content }] } } }
        )
    });
})