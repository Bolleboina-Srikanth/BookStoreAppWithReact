import logo from './logo.svg';
import './App.css';
// import SignUp from './Components/Pages/SignUp/SignUp';
// import SignIn from './Components/Pages/SignIn/SignIn';
import Dashboard from './Dashboard/Dashboard';
import BookStoreRouter from './Components/Routing/Router';
import OrderPlaced from './Components/orderplaced/orderplaced';

function App() {
  return (
    <div className="App">
           {/* <SignUp/>  
        <SignIn/>    
          
      
         {/* <OrderPlaced/> */}
         {/* <Dashboard/>   */}
         <BookStoreRouter/>
         {/* <Dashboard/> */}
    </div>
  );
}

export default App;
