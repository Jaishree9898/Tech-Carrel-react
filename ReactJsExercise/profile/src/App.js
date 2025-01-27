import React from "react";
import UserProfile from "./Components/UserProfile";
import NameAge from "./Components/NameAge";
import Hobbies from "./Components/Hobbies";

function App() {
  const name = "Shubham";
  const age = 27;
  const hobby = ["Dancing", "Singing", "Travelling"];

  return (
    <>
      <UserProfile />
      <NameAge name={name} age={age} />
      <Hobbies hobby={hobby} />
    </>
  );
}

export default App;


