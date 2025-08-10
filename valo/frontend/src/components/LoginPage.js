import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [valorantId, setValorantId] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { valorantId });
      if (response.data.success) {
        history.push(`/dashboard?valorantId=${valorantId}`);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h1>Login with your Valorant ID</h1>
      <input
        type="text"
        placeholder="Enter Valorant ID"
        value={valorantId}
        onChange={(e) => setValorantId(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
