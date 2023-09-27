import React, { useState } from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './increament.css'
import { createContext } from "react";
import HeaderBar from "../../Header/Header";

export const creatingContext= createContext();
 export default function IncreamentBooks()
{
    const[count,setCount]=useState(1);
     
    const handleincreament=()=>{
        setCount(count+1);
    }

    const handledecreament=()=>{
        count === 0 ? 
        setCount(0) : setCount(count-1);
    }


    return(
        <>
        <div className="increament">
         
            <RemoveCircleIcon sx={{color: 'lightgray', width:30 ,height:30}}  onClick={handledecreament}></RemoveCircleIcon>&nbsp;
            <div ><p className="countborder">{count}</p></div>&nbsp;
            <AddCircleIcon sx={{color: 'lightgray', width:30 ,height:30}} onClick={handleincreament}/>
        </div>
        <creatingContext.Provider value={count}>
            <HeaderBar />
        </creatingContext.Provider>
        </>
    )
}