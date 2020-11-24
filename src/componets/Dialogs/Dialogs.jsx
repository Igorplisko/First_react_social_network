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

   let dialogsData = [
      { id: 1, name: 'Vladislav' },
      { id: 2, name: 'Igor' },
      { id: 3, name: 'Irene' },
      { id: 4, name: 'Margarita' },
      { id: 5, name: 'Julia' },
      { id: 6, name: 'Natalia' },
      { id: 7, name: 'Gennady' },
      { id: 8, name: 'Nikolay' },
      { id: 9, name: 'Alexander' }
   ]

   let messagesData = [
      { id: 1, message: 'Hey' },
      { id: 2, message: 'Hi my love, How are you' },
      { id: 3, message: 'I\'m good ! What about you?' },
      { id: 4, message: 'I\'m great too.' },
      { id: 5, message: 'Where are you been?' }

   ]




   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems} >

            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />

         </div>

         <div className={s.messages}>

            <DialogItem name={messagesData[0].message} id={messagesData[0].id} />
            <DialogItem name={messagesData[1].message} id={messagesData[1].id} />
            <DialogItem name={messagesData[2].message} id={messagesData[2].id} />
            <DialogItem name={messagesData[3].message} id={messagesData[3].id} />
            <DialogItem name={messagesData[4].message} id={messagesData[4].id} />


            {/*             
            <Massage message="Hey" />
            <Massage message="Hi my love, How are you" />
            <Massage message="I'm good ! What about you?" />
            <Massage message="I'm great too." />
            <Massage message="Where are you been?" /> */}
         </div>
      </div >

   )

}

export default Dialogs;