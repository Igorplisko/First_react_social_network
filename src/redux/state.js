//!!!DATA!!! 
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hey', likesCount: 25 },
            { id: 2, message: 'Hey, how are you doing?', likesCount: 7 },
            { id: 3, message: 'I love you ! ', likesCount: 25 }

         ],
         newPostText: ''

      },
      dialogsPage:
      {
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



      },
   },
   _callSubscriber() {
      console.log('state');
   },
   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0

         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);

      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
         this._state.dialogsPage.newMessageBody = action.body;
         this._callSubscriber(this._state);
      } else if (action.type === SEND_MESSAGE) {
         let body = this._state.dialogsPage.newMessageBody;
         this._state.dialogsPage.newMessageBody = '';
         this._state.dialogsPage.messages.push({ id: 6, message: body });
         this._callSubscriber(this._state);

      }
   }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })



export default store;
window.store = store;




//? action - это объект который описывает что именно нужно совершить он имеет тип к примеру { type: 'ADD-POST'}


