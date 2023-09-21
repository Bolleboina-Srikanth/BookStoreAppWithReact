import React from "react";
import './OrderSummary.css';
import image2 from '../Images/Image2.png';
import Button from '@mui/material/Button';

function OrderSummary() {
    return (
        <div className="ordersummaryfullscreen">
            <div className="ordersummarycontainer">
                <div className="ordersummarytext">
                    Order summary
                </div>
                <div className="ordersummaryimage">
                    <div>
                        <img id="summaryimagesize" src={image2} alt='jh'></img>
                    </div>

                    <div className="ordersummarydetails">
                        <div>
                            <p > Don't Make Me Think</p>
                        </div>
                        <div>
                            <p id="cartbysteve">by Steve krug</p>
                        </div>
                        <div>
                            <span id="cartrupees"><b>Rs.1500</b><s>Rs.2000</s></span>
                        </div>
                    </div>

                </div>
                <div className="summarycheckoutbutton">
                <Button id="placeorderbutton" variant="contained">chekout</Button>
                </div>
            </div>

        </div>

    )
}

export default OrderSummary;