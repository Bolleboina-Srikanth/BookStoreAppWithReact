import React from "react";
import './orderplaced.css';
import orderimage from '../Images/orderplacedimage.png';
import { Link } from "react-router-dom";
function OrderPlaced() {
    return (
        <div className="orderplacedfullscreen">
            <div className="o-parentcontainer">
                <div>
                    <img id="orderimage" src={orderimage} alt="kj"></img>
                </div>
                <div>
                <div>hurry!!! your oeder is confirme</div>
                <div>the order id is #123456 save the order id for</div>
                <div>further communication</div>
                </div>
                <div className="table">
                    <table border={1}>
                        <tr>
                            <th >Email us</th>
                            <th>Contact us</th>
                            <th>Address</th>
                        </tr>
                        <tr>
                            <td>sky2312@gmail.com</td>
                            <td>+91 864273676</td>
                            <td>36-6-111,warangal,telangana<br></br>506330</td>
                        </tr>
                    </table>
                </div>
                <div>
                <button className="cd-submit-button" type="submit">CONTINUE SHOPPING</button>
                </div>
            </div>

        </div>
    )
}
export default OrderPlaced;