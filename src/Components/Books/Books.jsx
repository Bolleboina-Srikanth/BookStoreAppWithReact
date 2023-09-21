import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img1 from '../Images/Image 1.png';
import '../Books/Books.css';
import { useNavigate } from 'react-router-dom';






export default function BookCard() {
    const navigate =useNavigate();
    const handleBook=()=>{
        navigate("/displaybook");
     }
    return (
        <Card  onClick={handleBook}  sx={{
            maxWidth: 230,
            marginTop: 3,
            marginLeft: 5,
            height: 172,
            maxheight: 768,
            height: 300,

        }}>
            <CardActionArea className='box-container'>
           
                <div className='image'>
                    <img src={img1} alt='jh'></img>
                </div>
                <CardContent>
               
                    <div className='bookdetails'>
                        <p className='text'> Don't Make Me Think
                            by Steve krug
                        </p>
                        <div><br></br>
                        <span className='star'>4.5 &#9733;</span>
                        <span>(20)</span>
                        </div><br></br>
                        
                        <span>
                            <b>Rs.1500</b><s>Rs.2000</s>
                        </span>
                    </div>
                    
                </CardContent>
            </CardActionArea>

        </Card>
       
    );
}
