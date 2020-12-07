
import './App.css';
// import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import { Route } from "react-router-dom";
import DialogsContainer from './componets/Dialogs/DialogsContainer';


const App = (props) => {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

        <Route path="/dialogs"
          render={() => <DialogsContainer store={props.store} />} />
        <Route path="/profile"
          render={() => <Profile store={props.store} />} />

      </div>
    </div>

  );
}


export default App;





