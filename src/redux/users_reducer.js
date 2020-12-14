const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {

   users: [
      {
         id: 1,
         // photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
         followed: false,
         fullName: 'Igor',
         status: 'When if not now?',
         location: { city: 'Minsk', country: 'Belarus' }
      },
      {
         id: 2,
         // photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
         followed: true,
         fullName: 'Vlad',
         status: 'I am a boss too',
         location: { city: 'Moscow', country: 'Russia' }
      },
      {
         id: 3,
         // photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/220px-Dmitry_Nagiev_2017_4.jpg',
         followed: false,
         fullName: 'Alexsandr',
         status: 'I am a boss too',
         location: { city: 'Kiev', country: 'Ukraine' }
      }

   ]
}
const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         }
      case SET_USERS: {
         return { ...state, users: [...state.users, ...action.users] }
      }
      default:
         return state;
   }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({
   type: SET_USERS, users
})


export default usersReducer;






//! "Reducer" - это чистая функция  которая принимает старый state принимает action  если необходимо то она модифицирует старый state и возврощает измененую копию или не тронутый state если его не было необходимости менять из этой функции.

//! pure function - не имеет права менять то что в нее пришло ...