import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './SignIn.css';
import storeimage from '../../Images/storeimage2.png';
function SignIn (){
    
        return (
            <div className="full-screen">
                <div className="parent-container">
                    
                        <div className="signinimage">
                            <img id="imageId" src={storeimage} alt="fundoo" />
                        </div>
                        {/* <div id="heading">
                            <p>ONLINE BOOK SHOPPING</p>
                        </div> */}
                    
                    <form className="container">
                        <div className="SigninSignUp">
                            <div ><Link id="signinid" to='/'>LOGIN</Link></div>
                            <div><Link id="signupid" to='/signup'>SIGNUP</Link></div>
                        </div>

                        <label className="names" for="email">Email id</label>
                        <TextField className="box" id="email" />
                        <p id="fpwd">forgot password?</p>


                        <label className="names" for="pwd">Password</label>
                        <TextField className="box" id="pwd" />


                        <div className="buttonclass">
                            <Button id="button" variant="contained"><Link to='/bookcard'>login</Link></Button>
                        </div>
                        <p>---------- OR  ----------</p>
                        <div className="fg">
                            <Button variant="contained">facebook</Button>
                            <Button id="google" variant="contained">Google</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    
}
export default SignIn;