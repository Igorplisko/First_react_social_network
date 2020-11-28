import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: 'Hey', likesCount: 25 },
  { id: 2, message: 'Hey, how are you doing?', likesCount: 7 },
  { id: 3, message: 'I love you ! ', likesCount: 25 },

]

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


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
