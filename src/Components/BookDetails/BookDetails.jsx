import React, { useState } from "react";
import './BookDetails.css';
import image2 from '../Images/Image2.png';
import image3 from '../Images/Image2.1.png';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import IncreamentBooks from "../AddToCart/increamentItems";

const DisplayBook = ({Book,setvalue}) => { 
    //----------------------------------------------
     const [addtobag, setAddtobag] = useState(false);
    // console.log(getselectedbook);
     const handleAddtoBag =  () =>{
        setAddtobag(true);
     }
    
  
    //--------------------------------------------- 
    const navigate= useNavigate();
    const[add,setAdd]= useState(false)
    const handlecart=()=>{
    setAdd(true);

       // navigate("/cart");
    }

    const handlehome= (prevstate) => {
        setvalue(!prevstate);
    }
    console.log("bookdeatails:"+setvalue);
    

    return (
        <div className="bookFullScreen">
            <div className="homebook"> <div onClick={handlehome}>Home/ </div> Book</div>
            <div className="bookParentContainer">
                
                <div className="bookchild1">
                    <div className="imgborder" >
                        <img className="bookimg2" src={image2}></img>
                    </div>
                    <div className="imgborder"> <img src={image3}></img></div>
                </div>
                <div className="bookchild2">
                    <div className="child2bookimg" > <img id="child2bookimg" src={image2}></img></div>

                    <div className="bookbuttons">

                        { add ? <IncreamentBooks/> : 
                        <div>
                            <Button onClick={handlecart} id="addtobag" variant="contained">ADD TO BAG</Button>
                        </div>
                        }

                        <div>
                            <Button id="bookwhishlist" variant="contained">&#9829; WISHLIST</Button>
                        </div>
                    </div>
                </div>




                <div className="bookchild3">



                    <div className='bookchild3details'>
                        <div>
                            <p className="dont">
                                {/* dont make think */}
                                {Book.bookName}
                                </p>
                        </div>
                        <div className="bysteve">
                            <p >
                                {/* by steve */}
                                {Book.author}</p>
                        </div>
                        <div            >
                            <span className='star'>4.5 &#9733;</span>
                            <span>&nbsp;(20)</span>
                        </div>
                        <div className="rupees">
                            <span>
                                <b id="fifteen">Rs.{Book.discountPrice}&nbsp;</b><s> Rs.{Book.price}</s>
                            </span>
                        </div>
                        <hr></hr>
                    </div>



                    <div className="dontmakemebookdetails">
                        <p className="bookdetailscolor">	&#8226; Book Details</p>
                        <p className="booktext">
                            {/* Since, don’t make me think (now available in four color) was first published in 2000, hundreds of thousands of web designers and developers have relied on usability Guru Steve krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical. */}
                            {Book.description}
                            </p>
                        <hr className="horizontalline"></hr>
                    </div>



                    <div className="customerfeedback">
                        <p className="cfb">Customer Feedback</p>
                        <div className="overallreview">
                            <p>Overall rating</p>
                            <p id="fivestars"> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> </p>
                            <input id="inputtype" type="text" placeholder="Write your review"></input>
                        </div>
                        <div className="fbsubmit">
                            <Button variant="contained">Submit</Button>
                        </div>
                    </div>


                    <div className="bookreviews">
                        <div>
                            <div className="avataricon">
                                <Avatar className="iconsize">S</Avatar>Sky
                            </div>
                            <Rating name="read-only" value='4' readOnly />
                            <p className="textcolor">You couldn't solely depend on this book as some parts would be tough for you as a beginner. And yes exercises are a bit difficult to understand. Solutions are there in back to help you. Overall a good experience.</p>
                        </div>
                        <div>
                            <div className="avataricon">
                                <Avatar className="iconsize">V</Avatar>Vishwa
                            </div>
                            <Rating name="read-only" value='5' readOnly />
                            <p className="textcolor">Un gran libro con buenos ejemplos y que te ayudará mucho para manejar JS y el DOM para crear páginas web dinámicas</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default DisplayBook;

