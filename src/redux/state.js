//!!!DATA!!! 

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hey', likesCount: 25 },
            { id: 2, message: 'Hey, how are you doing?', likesCount: 7 },
            { id: 3, message: 'I love you ! ', likesCount: 25 }

         ],
         newPostText: 'Write what you wish'

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

         ]
      }
   },
   getState() {
      return this._state
   },
   _callSubscriber() {
      console.log('state');
   },
   addPost() {
      debugger;
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0

      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   }

}



export default store;
window.store = store;