import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

   let newPostElement = React.createRef()

   let addPost = () => {
      props.addPost()
      props.updateNewPostText('');
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onPostChange}
                  ref={newPostElement}
                  value={props.newPostText} />
               {/* //TODO add this code   "placeholder="Write what you wish" */}
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
