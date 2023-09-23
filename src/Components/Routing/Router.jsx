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


export default function BookStoreRouter() {
    return (

        <div>
            <BrowserRouter>
                <AppbarStatic>
                    <Routes>
                        <Route exact path={"/"} element={<SIGNIN />} />
                        <Route path={"/signup"} element={<SIGNUP />} />
                        {/* <Route  path={"/dashboard"} element={<DASHBOARD/>}/> */}
                        <Route path={"/bookcard"} element={<BOOKCARD />} />
                        <Route path={'/displaybook'} element={<DisplayBook />}></Route>
                        <Route path="/cart" element={<BookCart />}></Route>
                        <Route path={"/customerdetails"} element={<CustomerDetails />}></Route>
                        <Route path={'/orderplaced'} element={<OrderPlaced />}></Route>
                    </Routes>
                </AppbarStatic>
            </BrowserRouter>

        </div>

    )
}
