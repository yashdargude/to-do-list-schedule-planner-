// SignIn.js
import React, { useState } from 'react';
import '@/Sign_in_page/SignIn.css';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    const isAuthenticated = true; // Replace with your authentication logic
    if (isAuthenticated) {
      history.push('/page'); // Navigate to the page after signing in
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <h2 className="sign-in-header">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn sign-in-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
