import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(sendMessageCreator());
      },
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body));
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;



//! this change  code 





//?The  "connect()" - function connects a React component to a Redux store. It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.
//?The "mapStateToProps" and "mapDispatchToProps" deals with your Redux store’s state and dispatch, respectively. 