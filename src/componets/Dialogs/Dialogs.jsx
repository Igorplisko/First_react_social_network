import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
   return (

      <div className={s.dialogs}>
         <div className={s.dialogItems} >

            <div className={s.dialog}>
               Vladislav
            </div>
            <div className={s.dialog}>
               Igor
            </div>
            <div className={s.dialog + ' ' + s.active}>
               Irene
            </div>
            <div className={s.dialog}>
               Margarita
            </div>
            <div className={s.dialog}>
               Julia
            </div>
            <div className={s.dialog}>
               Natalia
             </div>
            <div className={s.dialog}>
               Gennady
             </div>
            <div className={s.dialog}>
               Nikolay
             </div>
            <div className={s.dialog}>
            </div>










         </div>
         <div className={s.messages}>
            <div className={s.dialog}>Hey</div>
            <div className={s.dialog}>Hi my love, How are you</div>
            <div className={s.dialog}>I'm good ! What about you?</div>
            <div className={s.dialog}>I'm great too.</div>
            <div className={s.dialog}>Where are you been?</div>








         </div>
      </div>

   )

}

export default Dialogs;