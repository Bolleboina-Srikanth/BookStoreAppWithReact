import React, { useContext, useState } from "react";
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
import OrderSummary from "../Order Summary/OrderSummary";
import BoxIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import { creatingContext } from "../AddToCart/increamentItems";
import { Badge } from "@mui/material";


function BookCart() {
  const [custDetails, setCustDetails] = useState(false)
  const handleorder = () => {
    setCustDetails(!custDetails);
  }
  const [summary, setSummary] = useState(false)

  function CallingOrderSummary(add) {
    setSummary(add);

  }



  const itemvalueContex = useContext(creatingContext);
  console.log("item increament :"+itemvalueContex);


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
                <span id="cartrupees"><b>Rs.1500</b><s>&nbsp;Rs.2000</s></span>
              </div>
              <div className="carticons">
                <span> <RemoveCircleIcon sx={{color: 'lightgray', width:30 ,height:30}} />
                
                 <BoxIcon sx={{color: 'lightgray', width:30 ,height:30}}></BoxIcon>
                
                  <AddCircleIcon sx={{color: 'lightgray', width:30 ,height:30}}/></span>
                <div>  &nbsp;  Remove</div>
              </div>
            </div>

          </div>
          { custDetails ? "": 
          <div className="placeorder">
            <Button onClick={handleorder} id="placeorderbutton" variant="contained">Place order</Button>
          </div>
          }
        </div>

        {custDetails ? <CustomerDetails call={CallingOrderSummary} /> :
          <div className="addressDetails">
            {
              <p id="addressstyle">   Address Details</p>
            }
          </div>
        }
        {  summary ? <OrderSummary/> :
          <div className="orderdetails">
            <p id="addressstyle">Order Summary</p>
          </div>
        }
      </div>

    </div>
  )
}
export default BookCart;