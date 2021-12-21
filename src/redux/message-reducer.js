const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageEntity = {
                id: 6,
                message: action.newMessage
            }
            return {
                ...state,
                dialogs: [...state.dialogs],
                messages: [...state.messages, newMessageEntity]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessage) => (
    {
        type: SEND_MESSAGE,
        newMessage
    });

export default messageReducer;








