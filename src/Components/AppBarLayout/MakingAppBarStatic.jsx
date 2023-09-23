import { useLocation } from "react-router-dom";
import HeaderBar from "../../Header/Header";

export const AppBarPositioning=()=>{
    const location=useLocation();
    const excludepaths=['/signup','/'];

    if(excludepaths.includes(location.pathname))
    {
        return null;
    }
    return <HeaderBar/>
}