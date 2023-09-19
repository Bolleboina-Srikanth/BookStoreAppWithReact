// import React from "react";

// import './pwd.css';

// function Pwd() {
//     return (
//         <div className="form">
//             <div className="parent-container">
//                 <div className="fgpwd">
//                     <h3>Forgot Your Password?</h3>
//                 </div>
//                 <div>
//                     <p>Enter your email address we'll send you a link to reset your password </p>
//                     <label className="names" for="email">Emai id</label>
//                     <TextField className="box" id="mobile" />

//                     <div className="buttonclass">

//                         <Button id="button" variant="contained">SignUp</Button>
//                     </div>
//                 </div>
//                 <div>
//                     <h4>CREATE ACCOUNT</h4>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Pwd;


import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


import './pwd.css';

export default function Pwd() {
    return (
        <div className="form">
            <div className="forgotpwdparent-container">
                <div className="fgpwd">
                    <h3>Forgot Your Password?</h3>
                </div>

                <Card sx={{ maxWidth: 350 }}>
                    <div className='emailbox'>
                        <p >Enter your email address we'll send you a link to reset your password </p>
                        <label className="emailidtext" for="email" >Emai id</label>
                        <TextField className="box" id="mobile" />

                        <div className="buttonclass">
                            <Button id="button" variant="contained">Reset Password</Button>
                        </div>
                    </div>
                    <div className='createaccount'>
                        <h4>CREATE ACCOUNT</h4>
                    </div>
                </Card >
        </div >
        </div>
    );
}