import React from 'react'
import "./MyButton.css"
import PropTypes from "prop-types"

export const MyButton = ({size,bgColor,disabled,onclick,primary,text,...args}) => {
    let variant=primary?"primary":"secondary"
  return (
    <button onClick={onclick} disabled={disabled} style={{backgroundColor:bgColor}}className={`${size} ${variant}`} {...args}>{text}</button>
  )
}

MyButton.propTypes={
  primary:PropTypes.bool,
  text:PropTypes.string.isRequired,
  bgColor:PropTypes.string,
  disabled:PropTypes.bool,
  size:PropTypes.oneOf(["small","medium","large"]),
  onclick:PropTypes.func

};