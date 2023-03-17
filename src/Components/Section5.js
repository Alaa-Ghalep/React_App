import React,{useContext} from "react";
import img1 from '../images/img5.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

import Card2Sec5 from "./Card2Sec5";
import Card2Sec5Style from "./Card2Sec5.css";
import { ProContext } from "../App";


// import "../css/Section5.css";
const Section5 = () => {
  const { Cart, RemoveFromCart, AddCart, isExists } = useContext(ProContext);

  const plist = [
    { img: img1, title: "Walter White", span: "Chief Executive Officer" },
    { img: img2, title: "Sarah Jhonson", span: "Product Manager" },
    { img: img3, title: "William Anderson", span: "CTO" },
    { img: img4, title: "Amanda Jepson", span: "Accountant" },
  ];
  return (
    <section id="team" class="team">
      <div class="container ">
        <div class="row">
          {plist.map((product) => 
<div className="col-xl-3 col-lg-4 col-md-6">
<div className="member">
  <img src={product.img} className="img-fluid" alt="" />
  <div className="member-info">
    <div className="member-info-content">
      <h4>{product.title}</h4>
    
      <span>{product.span}</span>
      {/* <button
              onClick={
                isExists(product)
                  ? () => RemoveFromCart(product)
                  : () => AddCart(product)
              }
              className="btn btn-outline-success"
            >
              {isExists(product) ? "Remove" : "Add"}
            </button> */}
    </div>
  </div>
</div>
</div>
          )}
      </div>
      </div>

    </section>
    
  );
};
export default Section5;