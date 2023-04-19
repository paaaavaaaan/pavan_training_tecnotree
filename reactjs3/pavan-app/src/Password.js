import React, { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <label>
        Password:
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
        />
      </label>
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
export default PasswordInput;