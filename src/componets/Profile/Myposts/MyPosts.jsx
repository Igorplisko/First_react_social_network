import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/state';
import s from "./MyPosts.module.css";
import Post from './Post/Post';





// let addPostActionCreater = () => {
//    return {
//       type: 'ADD-POST'
//    }
// }

// let updateNewPostTextActionCreater = (text) => {
//    return {
//       type: 'UPDATE-NEW-POST-TEXT', newText: text
//    }
// }


const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

   let newPostElement = React.createRef()

   let addPost = () => {
      props.dispatch(addPostActionCreater())

   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
      let action = updateNewPostTextActionCreater(text);
      props.dispatch(action);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText} />

            </div>
            <div />
            {/* <textarea></textarea> */}
            <button onClick={addPost}  >Add post</button>
            <div />
         </div>

         <div className={s.posts}>
            {postsElements}
         </div>
      </div>)

}




export default MyPosts 
