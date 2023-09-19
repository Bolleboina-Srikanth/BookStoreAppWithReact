import React from "react";
import HeaderBar from "../Header/Header";
import BookCard from "../Components/Books/Books";
import ForgotPassword from "../Components/Pages/Forgotpassword/forgotpwd";
import Pwd from "../Components/Pages/Forgotpassword/fpwd";
import DisplayBook from "../Components/BookDetails/BookDetails";
function Dashboard()
{
    return(
        <div>
              {/* <HeaderBar/> */}
            {/* <BookCard/>    */}
               <ForgotPassword/> 
            <Pwd/>
            {/* <DisplayBook/> */}
        </div>
    )
}

export default Dashboard;