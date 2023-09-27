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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getallbooks } from "../Components/Services/bookservice";
import './dashboard.css';
function Dashboard() {


  const [books, setBooks] = useState([]);

  useEffect(() => {

    const promise = getallbooks();
    promise.then((response) => {
      setBooks(response.data.result);
    })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);
  //console.log(books);
  //-----------------------------------------------------------------------------------------
  const [Book, setSelected] = useState()
  // function getparticularbookdetails(receivedbook) {
  //   console.log(receivedbook);
  //   setSelected(receivedbook);
  // }
  const[removedetails,setRemove] = useState(false);
  const showbookdetails = () => {
    return books.map((book) => (
      <div key={book._id}>
        {/* key={book._id} */}
        <BookCard bookdisplay={book} bookdetails={setSelected}   setboolean={setRemove}/>
        {/* {console.log("boookkk", book)} */}

      </div>
    ))
  }
  //-----------------------------------------------------------------------
  
  console.log(removedetails);

  return (
    <div className="book-list">

      <div className="book-list-child">
        {/* {
        books.map((book) => (
          <BookCard bookdisplay={book} />
        ))
      } */}
        {removedetails? <DisplayBook Book={Book} setvalue={setRemove} /> : showbookdetails()}

      </div>
    </div>
  );
}







export default Dashboard;