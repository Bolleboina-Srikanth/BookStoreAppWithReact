import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
           {/* <SignUp/>  
        <SignIn/>     */}
         <Dashboard/>  
    </div>
  );
}

export default App;
