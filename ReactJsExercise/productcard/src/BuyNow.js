import React from "react";

function BuyNow() {
  const HandleClick = () => {
    console.log("Button Clicked");
  }
  return (    
    <>
    <button onClick={HandleClick}>Buy Now</button>
    </>
  )
}

export default BuyNow;