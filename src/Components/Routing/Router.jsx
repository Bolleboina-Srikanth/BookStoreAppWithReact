import React from "react";
import SIGNIN from '../Pages/SignIn/SignIn';
import SIGNUP from '../Pages/SignUp/SignUp';
import DASHBOARD from '../../Dashboard/Dashboard';
import BOOKCARD from '../Books/Books';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppbarStatic } from "../AppBarLayout/AppBarposition";
import DisplayBook from "../BookDetails/BookDetails";
import BookCart from "../Cart/BookCart";
import OrderPlaced from "../orderplaced/orderplaced";
import CustomerDetails from '../CustomerDetails/customerdetails'
import AuthRoute from "./AuthRoute";
import Pwd from "../Pages/Forgotpassword/fpwd";
import BOOKDETAILS from '../BookDetails/BookDetails';

export default function BookStoreRouter() {
    return (

        <div>
            <BrowserRouter>
                <AppbarStatic>
                    <Routes>
                        <Route exact path={"/"} element={<AuthRoute><SIGNIN /></AuthRoute>} />
                        <Route path={"/signup"} element={<SIGNUP />} />
                        {/* <Route path={"/bookcard"} element={<BOOKCARD />} /> */}
                        <Route exact path={'/bookdetails'} element={<DisplayBook />}></Route>
                        <Route path="/cart" element={<BookCart />}></Route>
                        <Route path={"/customerdetails"} element={<CustomerDetails />}></Route>
                        <Route path={'/orderplaced'} element={<OrderPlaced />}></Route>
                        <Route path={'/forgotpassword'} element={<Pwd />}></Route>
                        <Route path={'/dashboard'} element={<DASHBOARD/>}></Route>
                        
                    </Routes>
                </AppbarStatic>
            </BrowserRouter>

        </div>

    )
}
