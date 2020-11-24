import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {


   let posts = [
      { id: 1, message: 'Hey', likesCount: 25 },
      { id: 2, message: 'Hey, how are you doing?', likesCount: 7 },

   ];

   let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea name="texts" placeholder="Write what you wish"></textarea>
            </div>
            <div />
            {/* <textarea></textarea> */}
            <button>Add post</button>
            <div />
         </div>

         <div className={s.posts}>
            {postsElements}
         </div>
      </div>)

}




export default MyPosts 