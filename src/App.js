
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";


const App = (props) => {

  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

        <Route path="/dialogs"
          render={() => <Dialogs store={props.store} />} />
        <Route path="/profile"
          render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />

      </div>
    </div>

  );
}
//?chenge tis page

export default App;



