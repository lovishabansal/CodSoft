// / let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');



// menu.onclick = () =>{
//    menu.classList.toggle('fa-times') ;
//    navbar.classList.toggle('active') ;
// }
// window.onscroll = () =>{
//     menu.classList.remove('fa-times') ;
//     navbar.classList.remove('active') ;
//  }
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewsSection from './ReviewsSection.jsx';

ReactDOM.render(<ReviewsSection />, document.getElementById('root'));

 let btn =document.querySelector('#btun');
 btn.addEventListener("click",function()
 {
   let input = prompt("enter the timings");
   alert("Your Booking is successfull");
   
 });