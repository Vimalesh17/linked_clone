import React, { useState } from "react";
import "./CustomInput.css"

const CustomInput=({type='text', label}:any)=>{
  const [value,SetValue]=useState("");
  const handleChange=(e:any)=>{
    const target=e.target.value;
    SetValue(target);

  }
return(
  <div className="input-container">
    <input type= {type} value={value} onChange={handleChange}></input>
    <label className={value && 'filled'}>{label}</label>

  </div>
)
}
const TextInput =()=>{
  return(
    <div className="text-input">
      <form>
        <CustomInput label="Email or Phone"/>
        <CustomInput type="password" label="Password"/>
      </form>
    </div>
  )

}

export default TextInput;