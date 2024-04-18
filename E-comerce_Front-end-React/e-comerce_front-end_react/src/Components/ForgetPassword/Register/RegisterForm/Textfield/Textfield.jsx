import "./Textfield.css";
import { useState } from "react";
export default function Textfield({ title, icon,type, text , onChange }) {
  
  return (
    <div className="textfield">
      <div className="title">
        <label>{title}</label>
      </div>
      <div className="inputext">
        {icon}
        <div className="vertical-line"></div>
        <input type={type} placeholder={text}  onChange={onChange}/> {/* Trim whitespace */}
      </div>
    </div>
  );
}
