import React, { useState } from 'react'

const ThemeToggle = () => {
    const[theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const style = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
    }

    // const buttonStyle = {
    //     backgroundColor: theme === 'light' ? 'black' : 'white',
    //     color: theme === 'light' ? 'white' : 'black',
    // }



    return (
        <div>
            <button  onClick={toggleTheme}>Toggle Theme</button>
            <div style={style}>Theme: {theme}</div>
        </div>
    )
}

export default ThemeToggle
