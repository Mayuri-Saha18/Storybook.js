import React from 'react'
import "./Button.css"

const Button = ({size,bgColor,disabled,onclick,primary,text}) => {
    let variant=primary?"primary":"secondary"
  return (
    <button className={`${size} ${variant}`}>{text}</button>
  )
}

export default Button