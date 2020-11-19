import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div>
         My posts
         <div>

            <textarea name="texts" placeholder="Write what you wish"></textarea>

            {/* <textarea></textarea> */}
            <button>Add post</button>

         </div>
         <div className={s.posts}>
            <Post massage='Hey, how are you doing?' likesCount='7' />
            <Post massage='Good, thanks. And you? By the way, this is my first post.' likesCount='25' />



         </div>
      </div>)

}




export default MyPosts 