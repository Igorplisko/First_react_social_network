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

   let dialogs = [
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

   let messages = [
      { id: 1, message: 'Hey' },
      { id: 2, message: 'Hi my love, How are you' },
      { id: 3, message: 'I\'m good ! What about you?' },
      { id: 4, message: 'I\'m great too.' },
      { id: 5, message: 'Where are you been?' }

   ]


   let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElements = messages.map(m => <Massage message={m.message} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems} >
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div >

   )

}

export default Dialogs;