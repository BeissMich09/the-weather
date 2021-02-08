import React from "react";

const Input = (props) => {
  return (
    <div>
      <p>{props.lable}:</p> <input type={props.inputType} value={props.value} onChange={props.onChange}/>
    </div>
  );
};

export default Input;
