import React from "react";
import { ButtonContainer } from "./ButtonElements"

export default function Button({ text, onClick, onHover, textColor, backgroundColor, fontSize }) {
  return (
    <>
      <ButtonContainer onClick={onClick} onHover={onHover} style={{ backgroundColor: backgroundColor, color: textColor, fontSize: fontSize }}>
        {text}
      </ButtonContainer>
    </>
  );
}
