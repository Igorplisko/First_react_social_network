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
const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {

      };
         return
   }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
   ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;






//! "Reducer" - это чистая функция  которая принимает старый state принимает action  если необходимо то она модифицирует старый state и возврощает измененую копию или не тронутый state если его не было необходимости менять из этой функции.

//! pure function - не имеет права менять то что в нее пришло ...