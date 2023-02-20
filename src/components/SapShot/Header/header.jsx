import React from "react";
import SearchImg from "./search.png"
import { useNavigate } from "react-router-dom";
import "./Header.css"
const Header=(props)=>{
    const navigate=useNavigate();
    const handlerButton=(str)=>{
        navigate(str);
    }
    const searchHandler=()=>{
        if(props.value===true)
        {
            props.trigger(false);
        }
        else{
            props.trigger(true);
        }
    }
    
    return(
        <>
        <div className="Container">
            <h1 className="hedingContainer">SnapShot</h1>
            <div className="searchContainer">
                <input type="text" placeholder="Search..." id="search-box" onClick={()=>{handlerButton("/")}} onChange={(e)=>{props.function(e.target.value)}}/>
                <button id="search-btn" onClick={searchHandler} ><img src={SearchImg} alt="search"/></button>
            </div>
            <div className="buttonsContainer">
                <input type="button" onClick={()=>{handlerButton("/mountains")}} value="Mountains"/>
                <input type="button" onClick={()=>{handlerButton("/beaches")}}value="Beaches"/>
                <input type="button" onClick={()=>{handlerButton("/birds")}} value="Birds"/>
                <input type="button" onClick={()=>{handlerButton("/food")}}value="Food"/>
            </div>
        </div>
        </>
    )
}
export default Header;