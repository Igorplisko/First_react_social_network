const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {                                        //! let initialState -- Это первоночальный стейт! 

   dialogs: [
      { id: 1, name: 'Vladislav' },
      { id: 2, name: 'Igor' },
      { id: 3, name: 'Irene' },
      { id: 4, name: 'Margarita' },
      { id: 5, name: 'Julia' },
      { id: 6, name: 'Natalia' },
      { id: 7, name: 'Gennady' },
      { id: 8, name: 'Nikolay' },
      { id: 9, name: 'Alexander' }
   ],

   messages: [
      { id: 1, message: 'Hey' },
      { id: 2, message: 'Hi my love, How are you' },
      { id: 3, message: 'I\'m good ! What about you?' },
      { id: 4, message: 'I\'m great too.' },
      { id: 5, message: 'Where are you been?' }

   ],

   newMessageBody: ''

};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         };
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }]
         };
      default:
         return state;
   }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default dialogsReducer

// ex