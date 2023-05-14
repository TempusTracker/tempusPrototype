import React from "react";

function LogInForm() {
  return (
    <form action="" id="form">
      <label for="#ILogin">Login</label>
      <input type="text" id="ILogin" placeholder="Login" class="FormInput" />
      <label for="#IEmail">Email</label>
      <input type="email" id="IEmail" placeholder="Email" class="FormInput" />
      <label for="#IPassword">Password</label>
      <input
        type="password"
        id="IPassword"
        placeholder="Password"
        class="FormInput"
      />
      <p>
        Есть команда? <input type="checkbox" id="ChTeam" />
      </p>
      <input
        type="number"
        id="ICodeTeam"
        placeholder="code"
        class="FormInput"
      />
      <button type="submit" id="BSubmit">
        Submit
      </button>
    </form>
  );
}

export default LogInForm;
