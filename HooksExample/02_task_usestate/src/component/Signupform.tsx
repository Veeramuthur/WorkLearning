import { useState } from 'react'

const Signupform = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({});


    const validateUsername = () => {
        if (username.length < 3) {
            setErrors((prevErrors) => ({ ...prevErrors, username: 'Username must be at least 3 characters.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, username: undefined }));
        }
    };

    const validatePassword = () => {
        if (password.length < 6) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, password: undefined }));
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
        }
    };


    const Validation = (username: string, password: string, email: string) => {
        if (username === '' || password === '' || email === '') {
            setErrorMessage('All fields are required');
            return;
        }
        if (username.length < 3) {
            setErrorMessage('Username must be at least 3 characters long');
        } else if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long');
        } else if (!email.includes('@')) {
            setErrorMessage('Invalid email format');
        } else {
            setErrorMessage('Signup successful');
        }
    }


    return (
        <div>
            <h1>Signupform</h1>
            <div>
                <label>UserName: <input type="text"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }} onBlur={validateUsername} />
                    {errors.username && <span className="error">{errors.username}</span>}
                </label>

            </div>
            <div>
                <label>password: <input type="text" value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} onBlur={validatePassword} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </label>
            </div>
            <div>
                <label>Email: <input type="text" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} onBlur={validateEmail} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>
            </div>
            <button type="submit" disabled={Boolean(errors.username || errors.email || errors.password)}>
                Sign Up
            </button>
        </div>
    )
}

export default Signupform
