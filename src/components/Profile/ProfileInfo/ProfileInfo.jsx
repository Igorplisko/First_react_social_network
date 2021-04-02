import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
   return (
      <div>
         <div>
            {/* <img className={s.imgStyle} src="https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg" /> */}
            <img className={s.imgStyle} src='https://s1.1zoom.ru/big0/917/403317-svetik.jpg' />
         </div>

         <div className={s.descriptionBlock}>
            Ava +description
         {/* Chenge this code  */}
         </div>
      </div>)

}




export default ProfileInfo


