import React from "react";
import HeaderBar from "../Header/Header";
import BookCard from "../Components/Books/Books";
import ForgotPassword from "../Components/Pages/Forgotpassword/forgotpwd";
import Pwd from "../Components/Pages/Forgotpassword/fpwd";
import DisplayBook from "../Components/BookDetails/BookDetails";
import BookCart from "../Components/Cart/BookCart";
import OrderSummary from "../Components/Order Summary/OrderSummary";
import CustomerDetails from "../Components/CustomerDetails/customerdetails";
import OrderPlaced from "../Components/orderplaced/orderplaced";
import { Link } from "react-router-dom";
function Dashboard()
{
    return(
        <div>
              {/* <HeaderBar><Link  to='/dashboard'></Link></HeaderBar> */}
          {/* <BookCard/>     */}
                 {/* <ForgotPassword/>  */}
          {/*    <Pwd/> 
          
            
            <OrderSummary/>
             <CustomerDetails/>
            <OrderPlaced/> */}
              {/* <DisplayBook/> */}
              <BookCart/>
        </div>
    )
}

export default Dashboard;