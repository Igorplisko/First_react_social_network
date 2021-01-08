import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



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
      sidebar: {},

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
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._callSubscriber(this._state);




   }
}





export default store;




//? action - это объект который описывает что именно нужно совершить он имеет тип к примеру { type: 'ADD-POST'}


//?  combineReducers - эта функция   //объединяеее наши редюсеры