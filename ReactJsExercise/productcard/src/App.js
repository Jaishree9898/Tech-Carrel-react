import React from "react";
import Image from "./Components/Image";
import tvImage from "./Tv.webp"; 
import Container from "./Container";
import ProductName from "./ProductName";
import BuyNow from "./BuyNow";

function App() {
  const productName="SKYWALL 107.86 cm (43 inches) Full HD LED Smart TV 43SW-VS (Black)"
  return (
    <>
      <Container />
      <Image image={tvImage} />
      <ProductName productName={productName} />
      <BuyNow />
      
    </>
  );
}

export default App;
