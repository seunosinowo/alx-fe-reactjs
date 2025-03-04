import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const validate = () => {
        const errors = {};
        if(!username) errors.username = 'Username is required';
        if(!email) errors.email = 'Email is required';
        if(!password) errors.password = 'Password is required';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        } else {
            console.log({username, email, password});
            setErrors({});
        }
    }

  return (
    <form>
        <div>
            <label>Username:</label>
            <input type='text' value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <span>{errors.username}</span>}
        </div>

        <div>
            <label>Email:</label>
            <input type='email' value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
            <label>Password</label>
            <input type='password' value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>{errors.password}</span>}
        </div>
        <button type='submit'>Register</button>
    </form>
  )
}

export default RegistrationForm