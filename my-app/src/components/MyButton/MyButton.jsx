import React from 'react'
import "./MyButton.css"

export const MyButton = ({size,bgColor,disabled,onclick,primary,text,...args}) => {
    let variant=primary?"primary":"secondary"
  return (
    <button onClick={onclick} disabled={disabled} style={{backgroundColor:bgColor}}className={`${size} ${variant}`}>{text}</button>
  )
}
