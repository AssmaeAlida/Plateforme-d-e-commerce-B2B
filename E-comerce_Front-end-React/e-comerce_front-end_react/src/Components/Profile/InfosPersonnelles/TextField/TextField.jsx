import "./TextField.css";
import { useState } from "react";
export default function TextField({ title,type, text  }) {
  
  return (
    <div className="textfield">
      <div className="title">
        <label>{title}</label>
      </div>
      <div className="inputext">
        <input type={type} placeholder={text}  /> {/* Trim whitespace */}
      </div>
    </div>
  );
}
