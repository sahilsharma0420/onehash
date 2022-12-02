import React from "react";
import "./Home1.css";

const Home1rating = (props) => {
  return (
    <>
      {
        
        props.details.map((value, index) => (
        <div className={`rating${value.id}`} key={index}>
        
            <img className="rating-image" src={value.img} alt="not found" />
            
          
          <div className="rating-lower">
            <p className="rating-number">{value.rating}/<span style={{fontSize:"14px" ,fontWeight:"400"}}>5</span></p>
            <div className="rating-star">
            {"⭐".repeat(value.rating)}
          
            </div>
          </div>
        </div>
      ))}
      
    </>
  );
};
export default Home1rating;
