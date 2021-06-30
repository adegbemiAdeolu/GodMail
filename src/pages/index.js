import React from "react";
import Avatar from "../components/Avatar";
import Button from "../components/Button"

export default function Home() {
  return (
    <>
      <Button 
        text="Click Me" 
        backgroundColor="#FFD800" 
        textColor="#FFFFFF" 
        fontSize="0.8rem" 
      />

      <Avatar 
        alt="AD" 
        height="100px"
        width="100px"
        backgroundColor="yellowgreen"
        
      />
    </>
  );
}
