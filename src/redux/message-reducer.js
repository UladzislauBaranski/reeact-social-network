const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'SSS'},
        {id: 3, name: 'AA'},
        {id: 4, name: 'Sas'},
        {id: 5, name: 'dsdde'},
    ],
    messages: [
        {id: 1, message: 'wewe'},
        {id: 2, message: 'SSqweS'},
        {id: 3, message: 'wwwqdass'},
        {id: 4, message: 'wedsd'},
        {id: 5, message: 'asdsadasascdfr'},
    ],
    newTextMessage: 'new message'
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageEntity = {
                id: 6,
                message: state.newTextMessage
            }

            return {
                ...state,
                dialogs: [...state.dialogs],
                messages: [...state.messages, newMessageEntity],
                newTextMessage: ''
            };

        case UPDATE_MESSAGE:
            return {
                ...state,
                newTextMessage: action.newMessageText
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => (
    {
        type: SEND_MESSAGE
    });

export const updateMessageActionCreator = (text) => (
    {
        type: UPDATE_MESSAGE,
        newMessageText: text
    }
);

export default messageReducer;








