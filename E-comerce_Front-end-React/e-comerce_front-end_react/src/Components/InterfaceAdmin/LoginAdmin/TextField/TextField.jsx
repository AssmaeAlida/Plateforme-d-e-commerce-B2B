import "./TextField.css";
import { useState } from "react";
export default function TextField({ title, icon,type, text  }) {
  
  return (
    <div className="textfield">
       <div className="title">
        <label>{title}</label>
      </div>
      <div className="inputext">
        {icon}
        <div className="vertical-line"></div>
        <input type={type} placeholder={text}  /> {/* Trim whitespace */}
      </div>
    </div>
  );
}
