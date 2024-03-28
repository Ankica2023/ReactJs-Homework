import React, { useState } from 'react';


const Login = () => {
  const elements = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ];

  const [comment, setComment] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      { }
      <select>
        {elements.map((element, index) => (
          <option key={index} value={element.value}>{element.name}</option>
        ))}
      </select>

      { }
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter your comment..."
      />
      <button onClick={togglePasswordVisibility}>
        <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
      </button>

      { }
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
    </div>
  );
};

export default Login;
