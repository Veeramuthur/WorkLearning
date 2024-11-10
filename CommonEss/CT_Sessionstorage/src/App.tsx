import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [name, setName] = useState(() => sessionStorage.getItem('name') || '');
  const [email, setEmail] = useState(() => sessionStorage.getItem('email') || '');


  useEffect(() => {
    // Save name and email to sessionStorage when they change
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
  }, [name, email]);

  const handleClear = () => {
    // Clear sessionStorage and reset state
    sessionStorage.clear();
    setName('');
    setEmail('');
  };

  return (
    <div>
<h2>Personal Information Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClear}>Clear Form</button>
    </div>
  )
}

export default App
