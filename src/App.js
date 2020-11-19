
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Profile/> */}
      <div className='app-wrapper-content'>
        < Dialogs />
        < Dialogs />
      </div>
    </div>);
}


export default App;



