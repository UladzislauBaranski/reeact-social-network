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

    let copyState;

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageEntity = {
                id: 6,
                message: state.newTextMessage
            }
            //     let copyState = {...state};
            //   copyState.dialogs = [...state.dialogs];
            //   copyState.messages = [...state.messages];

            copyState = {
                ...state,
                dialogs: [...state.dialogs],
                messages: [...state.messages, newMessageEntity],
                newTextMessage: ''
            };
         //   copyState.messages.push(newMessageEntity);
           // copyState.newTextMessage = '';

            /* let copyState = {
                 ...state,
                 dialogs: [...state.dialogs],
                 messages: [...state.messages]
             };
 */
            return copyState;
        }
        case UPDATE_MESSAGE:
            copyState = {
                ...state,
                newTextMessage: action.newMessageText
            };
          //  copyState.newTextMessage = action.newMessageText;
            return copyState;

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








