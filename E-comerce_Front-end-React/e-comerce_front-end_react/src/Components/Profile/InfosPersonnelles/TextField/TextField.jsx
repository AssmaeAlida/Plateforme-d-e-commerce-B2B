import "./TextField1.css";
import { useState } from "react";
export default function TextField({ title,type, text  }) {
  
  return (
    <div className="textfield">
      <div className="title10">
        <label>{title}</label>
      </div>
      <div className="inputext2">
        <input className="input-place" type={type} placeholder={text}  /> {/* Trim whitespace */}
      </div>
    </div>
  );
}
