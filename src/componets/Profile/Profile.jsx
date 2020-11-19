import React from 'react';
import MyPosts from '../Myposts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
   return (

      <div >
         <div> <img className={s.imgStyle} src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" />
         </div>

         <div>Ava +description
            
         </div>
                    <MyPosts />

      </div>)
}

export default Profile   