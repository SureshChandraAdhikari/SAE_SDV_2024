import React from "react";
import "./Gallery.css"
import BottomNavb from "../Bottomnav/Bottomnavbar";
import Footer from "../Footer/Footer";
import Photo from "../photogallery/photogallery";
const gallery=()=>{
    return (
        <div>
            <span style={{color:"white" , fontSize:'50px'}}>Gallery</span>
            <Photo/>
         <BottomNavb/>
         <Footer/>
        </div>
    )
}
export default gallery;