import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confirmPass, setConfirmPass] = useState(''); // New state for confirming password
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate user input (e.g., check if email, password, and confirmPass match)
      // Perform registration logic (e.g., create a new user account)
      console.log(email);
    };
  
    return (
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Full Name"
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          {/* New field for confirming password */}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="********"
            id="confirmPassword"
            name="confirmPassword"
          />
          <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
          Already have an account? Login here.
        </button>
      </div>
    );
  };
  