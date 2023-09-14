import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignUp.css';
import { Link } from "@mui/material";
import storeimage from '../../Images/storeimage2.png';
class SignUp extends Component {
    render() {
        return (
            <div className="full-screen">
                <div className="parent-container">
                    <div className="image">
                        <div>
                        <img id="imageId" src={storeimage}  alt="fundoo" />
                        </div>
                        {/* <div id="heading">
                            <p>ONLINE BOOK SHOPPING</p>
                        </div> */}
                    </div>
                    <form className="container">
                        <div className="SigninSignUp">
                            <div ><Link id="signin">LOGIN</Link></div>
                            <div><Link id="signup">SIGNUP</Link></div>
                        </div>
                        
                        <label className="names" for="firstname">Full name</label>
                        <TextField className="box" id="firstname" />
                        
                        <label className="names" for="email">Email id</label>
                        <TextField className="box" id="email" />

                        <label className="names" for="pwd">Password</label>
                        <TextField className="box" id="pwd" />

                        <label className="names" for="mobile">Mobile Number</label>
                        <TextField  className="box" id="mobile" />

                        <div className="buttonclass">
                        
                        <Button id="button"  variant="contained">SignUp</Button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
export default SignUp;