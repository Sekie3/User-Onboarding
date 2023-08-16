import React, { useState, useEffect } from "react";

function Form(props) {
  const { change, handleSubmit, errors } = props;

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <div>
      {errors.username && <p>{errors.username}</p>}
      {errors.email && <p>{errors.email}</p>}
      {errors.password && <p>{errors.password}</p>}
      {errors.tos && <p>{errors.tos}</p>}
      <form onSubmit={onSubmit}>
        <label>
          Username:
          <input  
            type="text"
            name="username"
            onChange={onChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </label>

        <label>
          Do you agree to the terms and conditions?
          <input
            type="checkbox"
            name="tos"
            onChange={onChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
