import React, { useState } from "react";
import './BookCart.css';
import LocationIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import image2 from '../Images/Image2.png';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RectangleIcon from '@mui/icons-material/RectangleOutlined';
import CheckBoxOutIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import Button from '@mui/material/Button';
import CustomerDetails from "../CustomerDetails/customerdetails";


function BookCart() {
  const [custDetails, setCustDetails] = useState(false)



  const handleorder = () => {
    setCustDetails(!custDetails);
  }



  return (
    <div className="CartFullScreen">
      <div className="cartParentContainer">
        <div className="homemycart">
          <p> <span>Home/</span> MyCart</p>
        </div>
        <div className="mycart">
          <div className="cartandlocation">
            <div className="mycarttext">My Cart(1)</div>
            <div className="location">
              <div><LocationIcon /></div>
              <div>
                choose your location
              </div>
              <div>
                <ArrowDropDownIcon />
              </div>

            </div>
          </div>
          <div className="cartimage">
            <div className='cartimagedetails'>
              <img id="cartimagesize" src={image2} alt='jh'></img>
            </div>

            <div className='cartpricedetails'>
              <div>
                <p > Don't Make Me Think</p>
              </div>
              <div>
                <p id="cartbysteve">by Steve krug</p>
              </div>
              <div>
                <span id="cartrupees"><b>Rs.1500</b><s>Rs.2000</s></span>
              </div>
              {/* <div className="carticons">
                <span> <RemoveCircleIcon /><AddCircleIcon /></span>
                <div> Remove</div>
              </div> */}
            </div>

          </div>
          <div className="placeorder">
            <Button onClick={handleorder} id="placeorderbutton" variant="contained">Place order</Button>
          </div>

        </div>

        {custDetails ? <CustomerDetails /> :
          <div className="addressDetails">
            {
              <p id="addressstyle">   Address Details</p>
            }
          </div>
        }

        <div className="orderdetails">
          <p id="addressstyle">Order Summary</p>
        </div>
      </div>

    </div>
  )
}
export default BookCart;