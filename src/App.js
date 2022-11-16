import logo from './logo.svg';
import './App.css';
import Login from './Pages/Sign-in/Login'
import SignUp from './Pages/Sign-up/SignUp';
import Header from './Components/Header/Header';
import TakeNote1 from './Components/TakeNote1/TakeNote1';

function App() {
  return (
    <div className="App">
    {/* <Login /> */}
    {/* <SignUp /> */}
    <Header />
    <TakeNote1 />
    </div>
  );
}

export default App;
