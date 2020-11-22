import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem = (props) => {

   let path = "/dialogs/" + props.id;
   return <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path} >{props.name}</NavLink>
   </div >
}


const Massage = (props) => {
   return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = (props) => {
   return (

      <div className={s.dialogs}>
         <div className={s.dialogItems} >

            <DialogItem name="Vladislav" id="1" />
            <DialogItem name="Igor" id="2" />
            <DialogItem name="Irene" id="3" />
            <DialogItem name="Margarita" id="4" /> <DialogItem name="Julia" id="5" />
            <DialogItem name="Natalia" id="6" />
            <DialogItem name="Gennady" id="7" />
            <DialogItem name="Nikolay" id="8" />
            <DialogItem name="Alexander" id="9" />
         </div>

         <div className={s.messages}>
            <Massage message="Hey" />
            <Massage message="Hi my love, How are you" />
            <Massage message="I'm good ! What about you?" />
            <Massage message="I'm great too." />
            <Massage message="Where are you been?" />
         </div>
      </div >

   )

}

export default Dialogs;