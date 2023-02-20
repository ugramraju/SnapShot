import Header from "./Header/header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./imagesStyle.css"

const apikey = "fb4fbdb918c97c291d18a7be045d867d"
const BirdsImages=()=>{
    const [images,setImages]=useState([]);
    useEffect(()=>{
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=birds&format=json&nojsoncallback=1`;
        axios.get(url)
        .then((res)=>{setImages(res.data.photos.photo)})
        .catch((err)=>{console.log(err)});
    },[])

    return(
        <>
        <Header/>
        <div className="imagesContainer">
        <h1>Bird Pictures</h1>
              {
              images.map((image)=>{
                const imageUrl=`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
                return(
                    <img key={image.id} src={imageUrl} alt="birds"/>
                )
              })
              }
        </div>
        </>
    )
}
export default BirdsImages;