import React, { useState } from 'react';

function PasswordChecklist() {
  const [password, setPassword] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <ul>
        <button>Submit</button>
        <p>Password should contain a Capaital letter,small letter,character and a number.</p><br></br>
      </ul>
    </div>
  );
}

export default PasswordChecklist;