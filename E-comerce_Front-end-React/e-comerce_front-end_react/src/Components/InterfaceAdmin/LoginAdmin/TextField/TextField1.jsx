import "./TextField1.css";
import { useState } from "react";
export default function TextField({ title, icon,type, text , onChange }) {
  
  return (
    <div className="textfield1">
       <div className="title1">
        <label>{title}</label>
      </div>
      <div className="inputext1">
        {icon}
        <div className="vertical-line1"></div>
        <input type={type} placeholder={text} onChange={onChange}  /> {/* Trim whitespace */}
      </div>
    </div>
  );
}
