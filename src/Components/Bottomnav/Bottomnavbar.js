import React from "react";
import "./Bottomnavbar.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas,fa } from '@fortawesome/free-solid-svg-icons'
import { ready } from "jquery";
import $ from 'jquery';
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
     <div>
    <ul className="bottom-nav">
            <div className="slider"></div>
            <li>
                <a href="#">
                <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#713375",}} />
                    <span>profile hi</span>
                </a>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#713375",}} />
                    <span>home</span>
                </a>
            </li>
            <li>
                <a href="#" className="active-icon">
                <FontAwesomeIcon icon="fa-solid fa-cube" style={{color: "#71336f",}} />
                    <span>code</span>
                </a>
            </li>
            <li >
                <a href="#">
                <FontAwesomeIcon icon="fa-solid fa-heart" style={{color: "#713375",}} />
                    <span>favorite</span>
                </a>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color: "#713375",}} />

                    <span>bag</span>
                </a>
            </li>
           
        </ul>
     </div>
       
    )
}
export default BottomNavb;