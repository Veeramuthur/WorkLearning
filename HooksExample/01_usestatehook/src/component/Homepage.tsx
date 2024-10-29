import { useState } from 'react'


interface User {
  name: string;
  age: number;
  email: string;
}
const Homepage = () => {
  const [greeting, setGreeting] = useState('Welcome');
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [names, setNames] = useState<string[]>([]);
  const [users, setUsers] = useState<User>({ name: 'John Doe', age: 25, email: 'john@example.com' });

  const updateGreeting = () => {
    setGreeting('Welcome Mahi and Rashi');
  }

  const updateCounter = () => {
    setCount(count + 1);
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  const addTodo = (newNames: string) => {
    setNames([...names, newNames]);
  };

  const updateEmail = (newEmail: string) => {
    setUsers({ ...users, email: newEmail });
  }


  return (
    <div>
      <h1>{greeting} </h1>
      <button onClick={updateGreeting} > Change Greeting </button>

      <h1>{count} </h1>
      <button onClick={updateCounter} > Increment Count </button>

      <h1>Toggle Visibility</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Message
      </button>
      {isVisible && <p>This is a toggled message!</p>}

      <h1>Array names</h1>
      <button onClick={() => addTodo("Veera")}>Add To-Do</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h1>Object users</h1>
      <p>Name: {users.name}</p>
      <p>Age: {users.age}</p>
      <p>Age: {users.email}</p>
      <button onClick={() => updateEmail('veerui@newmail.com')}>
        Update Email
      </button>

    </div>






  )
}

export default Homepage
