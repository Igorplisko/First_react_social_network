import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
   return (

      <div className={s.content}>
         <div> <img src="https://apod.nasa.gov/apod/image/2008/PerseidBridge_Zhang_4032.jpg" />
         </div>

         <div>Ava +description</div>

         <div>My posts
      <div> New post

      </div>
            <div className={s.posts}>

               <div className={s.items}>post1</div>
               <div className={s.items}>post2</div>
            </div>
         </div>
      </div>)
}

export default Profile