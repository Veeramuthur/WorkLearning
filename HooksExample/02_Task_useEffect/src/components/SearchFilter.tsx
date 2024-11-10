import { useEffect, useState } from "react";


const SearchFilter = () => {
  // add this state
  const [apiUsers, setApiUsers] = useState([])
  const [searchItem, setSearchItem] = useState('')
  // set the initial state of filteredUsers to an empty array
  const [filteredUsers, setFilteredUsers] = useState([])

    // fetch the users
  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      // save the complete list of users to the new state
      .then(data => setApiUsers(data.users))
      // if there's an error we log it to the console
      .catch(err => console.log(err))
  }, [])

  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    // filter the items using the apiUsers state
    const filteredItems = apiUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <div>
     <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder='Type to search'
      />
      {filteredUsers.length === 0
        ? <p>No users found</p>
        : <ul>
          {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
        </ul>
      }  
    </div>
  )
}

export default SearchFilter
