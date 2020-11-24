import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {

   let postData = [
      { id: 1, message: 'Hey', likesCount: 25 },
      { id: 2, message: 'Hey, how are you doing?', likesCount: 7 },

   ];


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
            <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount} />
            {/* 
Не выводиться сообщения поста */}


         </div>
      </div>)

}




export default MyPosts 