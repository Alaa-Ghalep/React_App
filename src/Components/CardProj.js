import React, { Component } from 'react'
import img1 from '../images/img.jpg';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
import {Link,NavLink} from "react-router-dom";
import StyleProj from'./StyleProj.css';



export default class Card extends Component {
  render() {
    const list=[{
        img:img1,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:20},
      
        {img:img2,
        title:'Delicious Burger',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:15},
      
        {img:img3,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:17}, 
        {img:img4,
        title:'Delicious Pasta',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:18}, 
        {img:img5,
        title:'French Fries',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:10}, 
        {img:img6,
        title:'Delicious Pizza',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:15},
         {img:img7,
        title:'Tasty Burger',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:12}, 
        {img:img8,
        title:'Tasty Burger',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:14},
        {img:img9,
        title:'Delicious Pasta',
        description:'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',
        price:10}
        
      
      
      
      
      
      ]
    return (
      <div>
          <section class="food_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>


      <div class="filters-content">
        <div class="row grid">
        {list.map((el)=>
          <div class="col-sm-6 col-lg-4 all pizza shadow">
            <div class="box">
              <div>
                <div class="img-box">
                  <img className='w--100 h-100' src={el.img} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
{el.title}               
   </h5>
                  <p>
                   {el.description}
                  </p>
                  <div class="options">
                    <h6>
                     ${el.price}
                    </h6>
              
                  </div>
                </div>
              </div>
            </div>
          </div>)}
         
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>

      </div>
    )
  }
}
