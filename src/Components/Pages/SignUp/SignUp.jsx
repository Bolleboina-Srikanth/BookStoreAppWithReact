import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignUp.css';
import { Link } from "react-router-dom";
import storeimage from '../../Images/storeimage2.png';
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();


    const fullnameRegex = /^[a-zA-Z ]{2,30}$/;
    // const lastNameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const [userdata, setUserdata] = useState(
        {
            FullName: '',
            Email: '',
            Password: '',
            MobileNumber: ''
        }
    )
    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUserdata({ ...userdata, [name]: value })

    }
    console.log(userdata);


    const [errorObj, setErrorObj] = useState(
        {
            FullNameError: false,
            FullNameHelper: ""
        })


    const handleClick = () => {
        let fullNameTest = fullnameRegex.test(userdata.FullName);
        // let lastNameTest = lastNameRegex.test(userInput.lastName);
        let emailTest = emailRegex.test(userdata.Email);
        let passwordTest = passwordRegex.test(userdata.Password);
        let mobilenumberTest = mobileRegex.test(userdata.MobileNumber);





        setErrorObj((prevstate) => (
            {
                ...prevstate,
                FullNameError: !fullNameTest,
                FullNameHelper: !fullNameTest ? "enter correct name" : "",

                EmailError: !emailTest,
                EmailHelper: !emailTest ? "enter correct name" : "",

                PasswordError: !passwordTest,
                PasswordHelper: !passwordTest ? "enter correct name" : "",

                MobileNumberError: !mobilenumberTest,
                MobileNumberHelper: !mobilenumberTest ? "enter correct name" : ""
            }
        ))
        if (fullNameTest === emailTest === passwordTest === mobilenumberTest === true) {
            // navigate("/");
        }


    }


    return (
        <div className="full-screen">
            <div className="parent-container">
                {/* <div className="image"> */}
                <div className="signupimage">
                    <img id="imageId" src={storeimage} alt="fundoo" />
                </div>
                {/* <div id="heading">
                            <p>ONLINE BOOK SHOPPING</p>
                        </div> */}
                {/* </div> */}
                <form className="container">
                    <div className="SigninSignUp">
                        <div ><Link id="signin" to="/">LOGIN</Link></div>
                        <div><Link id="signup" to='/signup'>SIGNUP</Link></div>
                    </div>

                    <label className="names" for="firstname">Full name</label>
                    <TextField className="box" id="firstname" name='FullName' value={(userdata.FullName)} onChange={handleInput} error={errorObj.FullNameError} helperText={errorObj.FullNameHelper} />

                    <label className="names" for="email">Email id</label>
                    <TextField className="box" id="email" name='Email' value={(userdata.Email)} onChange={handleInput} error={errorObj.EmailError} helperText={errorObj.EmailHelper} />

                    <label className="names" for="pwd">Password</label>
                    <TextField className="box" id="pwd" name='Password' value={(userdata.Password)} onChange={handleInput} error={errorObj.PasswordError} helperText={errorObj.PasswordHelper} />

                    <label className="names" for="mobile">Mobile Number</label>
                    <TextField className="box" id="mobile" name='MobileNumber' value={(userdata.MobileNumber)} onChange={handleInput} error={errorObj.MobileNumberError} helperText={errorObj.MobileNumberHelper} />

                    <div className="buttonclass">

                        <Button onClick={handleClick} id="button" variant="contained">SignUp</Button>
                    </div>

                </form>
            </div>
        </div>
    )

}
export default SignUp;