import React from 'react'
import "./Input.css"
import PropTypes from "prop-types"


export const Input = ({placeholder,size,padding,type,label,textsize,...args}) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} className={`${size}`} style={{padding:`${padding}px`,fontSize: `${textsize}px`}}{...args}/>
    </div>
  )
}

Input.propTypes={
  placeholder:PropTypes.string,
  textsize:PropTypes.number,
  label:PropTypes.string.isRequired,
  type:PropTypes.oneOf(["email","password","text","number"]),
  size:PropTypes.oneOf(["small","medium","large"]),
  padding:PropTypes.number

};