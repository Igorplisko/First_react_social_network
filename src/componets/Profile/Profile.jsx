import React from 'react';
import MyPosts from './Myposts/MyPosts';
import MyPostsContainer from './Myposts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

   return (
      <div >
         <ProfileInfo />

         <MyPostsContainer
            store={props.store} />

      </div>)
}

export default Profile   