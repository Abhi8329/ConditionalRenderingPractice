import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* Using && in React */}
      {props.isRegister === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* Using Ternary Operator */}
      <button type="submit">{props.isRegister ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
