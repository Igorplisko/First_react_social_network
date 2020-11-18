import React from 'react';
import MyPosts from '../Myposts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
   return (

      <div className={s.content}>
         <div> <img src="https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_4032.jpg" />
         </div>

         <div>Ava +description
            
         </div>
         <MyPosts />

      </div>)
}

export default Profile   