import logo from './logo.svg';
import './App.css';
import Login from './Pages/Sign-in/Login'
import SignUp from './Pages/Sign-up/SignUp';
import Header from './Components/Header/Header';
import TakeNote1 from './Components/TakeNote1/TakeNote1';
import TakeNote3 from './Components/TakeNote3/TakeNote3';
import TakeNote2 from './Components/TakeNote2/TakeNote2';
import DashBoard from './Pages/Dashboard/DashBoard';

function App() {
  return (
    <div className="App">
    {/* <Login /> */}
    {/* <SignUp /> */}
    {/* <Header />
    <TakeNote1 />
    <TakeNote2 />
    <TakeNote3 /> */}
    <DashBoard />
    </div>
  );
}

export default App;
