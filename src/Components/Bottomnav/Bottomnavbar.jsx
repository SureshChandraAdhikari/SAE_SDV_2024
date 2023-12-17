import React from "react";
import "./Bottomnavbar.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas,fa } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import { ready } from "jquery";
import { Link } from "react-router-dom";
library.add(fas);//this is key to add fas icons in react

$(document).ready(function () {
    $('.bottom-nav li a').click(function(){
        var position = $(this).position();
        var margin = 37;
        $('.slider').css({"left":+position.left+margin ,  "transform": "translateX(-50%)"});
        $('.bottom-nav li a').removeClass('active-icon');
        $(this).addClass('active-icon');
    });
});

const BottomNavb=()=>{
    return(
    <div className="btnav">
        <ul className="bottom-nav">
            <div className="slider"></div>
            <li>
                <Link to='/components'>
                <FontAwesomeIcon icon="fa-solid fa-gears" style={{color: "#713375",height:"22px"}} />
                </Link>
            </li>
            <li>
                <Link to='/Gallery'>
                <FontAwesomeIcon icon="fa-solid fa-image" style={{color: "#713375",height:"22px"}} />
                </Link>
            </li>
            <li>
                <Link to='/'>
                <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#71336f",height:"22px"}} />
                </Link>
            </li>
            <li >
                  <Link to='/Teams'>
                <FontAwesomeIcon icon="fa-solid fa-users" style={{color: "#713375",height:"22px"}} />
                </Link>
            </li>
            <li>
                <Link to='/About'>
                <FontAwesomeIcon icon="fa-solid fa-circle-question" style={{color: "#713375",height:"22px"}} />
                </Link>
            </li>
           
        </ul>
     </div>
       
    )
}
export default BottomNavb;