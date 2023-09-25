import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './SignIn.css';
import storeimage from '../../Images/storeimage2.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../../Services/userservices";
function SignIn() {
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
     const navigate =useNavigate();
    const [userlogin, setUserlogin] = useState(
        {
            email: "",
            password: ""
        });

    let name, value;

    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUserlogin({ ...userlogin, [name]: value })
    }
    //-------------------------------------------------------------------------------
    const [errorObj, setErrorObj] = useState(
        {
            emailError: false,
            emailHelper: "",
            passwordError: false,
            passwordHelper: ""
        })
    const handleClick = async () => {
        let emailTest = emailRegex.test(userlogin.email);
        let passwordTest = passwordRegex.test(userlogin.password);
        if (emailTest === false) {
            setErrorObj((prevState) => (
                {
                    ...prevState,//Spread operator-->it is used to copy values
                    emailError: true,
                    emailHelper: "enter correct email",
                }
            ));
        }
        else {
            setErrorObj((prevState) => (
                {
                    ...prevState,
                    emailError: false,
                    emailHelper: "",
                }));
        }
        if (passwordTest === false) {
            setErrorObj((prevState) => (
                {
                    ...prevState,
                    passwordError: true,
                    passwordHelper: "enter correct password",
                }));
        }
        else {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: false,
                passwordHelper: "",
            }));
        }

        
        if(emailTest === true && passwordTest === true)
        {
            let response = await signin(userlogin);
            localStorage.setItem("token",response.data.result.accessToken);
            console.log(response);

             navigate('/dashboard');
        }
    }
    const handlepassword=()=>{
        navigate('/forgotpassword')
    }


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
                    <TextField className="box" id="email" name="email" required value={userlogin.email} onChange={handleInput} error={errorObj.emailError} helperText={errorObj.emailHelper} />
                    <p id="fpwd" onClick={handlepassword}>forgot password?</p>


                    <label className="names" for="pwd">Password</label>
                    <TextField className="box" id="pwd" name="password" required value={userlogin.password} onChange={handleInput} error={errorObj.passwordError} helperText={errorObj.passwordHelper} />


                    <div className="buttonclass">
                        <Button id="button" variant="contained" onClick={handleClick}>login</Button>
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