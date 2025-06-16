import React, { useState } from 'react';

function PasswordPrompt({ onSubmit }) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>🔐 Enter Master Password</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ padding: '10px', width: '250px' }}
      />
      <br /><br />
      <button type="submit">Unlock</button>
    </form>
  );
}

export default PasswordPrompt;