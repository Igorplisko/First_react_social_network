const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: 'Hey', likesCount: 25 },
      { id: 2, message: 'Hey, how are you doing?', likesCount: 7 },
      { id: 3, message: 'I love you ! ', likesCount: 25 }

   ],
   newPostText: ''

}
const profileReducer = (state = initialState, action) => {
   debugger;
   switch (action.type) {
      case ADD_POST: let newPost = {
         id: 5,
         message: state.newPostText,
         likesCount: 0

      };
         state.posts.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer