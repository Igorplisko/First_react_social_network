
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import { BrowserRouter, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />

          <Route path="/news" component={Dialogs} />
          <Route path="/music" component={Dialogs} />
          <Route path="/game" component={Dialogs} />
          <Route path="/settings" component={Dialogs} />



        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;



