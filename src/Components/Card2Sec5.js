import React,{useContext} from "react";
import { ProContext } from "../App";

// import Card2Sec5Style from "./Card2Sec5.css";

function Card2Sec5(props) {
  const { Cart, RemoveFromCart, AddCart, isExists } = useContext(ProContext);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="member">
        <img src={props.img} className="img-fluid" alt="" />
        <div className="member-info">
          <div className="member-info-content">
            <h4>{props.title}</h4>
           
            <span>{props.span}</span>

            <div className="social">
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <button
                    onClick={
                      isExists(props)
                        ? () => RemoveFromCart(props)
                        : () => AddCart(props)
                    }
                    className="btn btn-outline-success"
                  >
                    {isExists(props) ? "Remove" : "Add"}
                  </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card2Sec5;