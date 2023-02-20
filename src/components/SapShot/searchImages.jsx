import Header from "./Header/header";
import { useState,useEffect } from "react";
import axios from "axios";
import "./imagesStyle.css"

const apikey = "fb4fbdb918c97c291d18a7be045d867d"
const SearchImages=()=>{
    const [images,setImages]=useState([]);
    const [input,setInput]=useState("");
    const [searching,setSearching]=useState(false);
    useEffect(()=>{
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${input}&format=json&nojsoncallback=1`;
        axios.get(url)
        .then((res)=>{setImages(res.data.photos.photo)})
        .catch((err)=>{console.log(err)});
    },[searching]);

   
    return(
        <>
        <Header function={setInput} trigger={setSearching} value={searching}/>
       
        <div className="imagesContainer">
            {input.length>1 ? <h1>{input} Pictures</h1>: " "}
        
              {
              images.map((image)=>{
                const imgUrl=`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
                return(
                    <img key={image.id} src={imgUrl} alt="mountainPictures"/>
                )
              })
              }
        </div>
        </>
    )
}
export default SearchImages;
