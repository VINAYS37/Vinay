// import React from 'react';

// function Login() {
//   return (
//     <div>
//       <h1>This is login page</h1>
//       <form><div><label>Name  </label>
//       <input type='text' id='username' name='name' style={{marginLeft:'5px'}}></input></div>
//       <label style={{marginRight:'2px'}}>password</label>
//       <input type='password' id='password' name='password' style={{marginLeft:'5px',marginTop:'5px'}}></input>
//       </form>
      
     
//     </div>
//   );
// }

// src/LoginPage.js
// src/LoginPage.js
// src/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';  // Import the CSS file  

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    gender: '',
    phone: ''
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,  
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-button">Login</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Details:</h2>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
