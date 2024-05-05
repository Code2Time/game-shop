import { useEffect } from "react";
import { useLocation } from "react-router-dom";
type d = any

export default function ScrollToTop():any{
    const {pathname} = useLocation();
    useEffect(() =>{
        window.scrollTo(0,0);
        
    },[pathname])
}