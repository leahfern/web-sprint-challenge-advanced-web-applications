import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const initialFormValues = { 
  username: '', 
  password: '' 
}

const Login = () => {
  const [credentials, setCredentials ] = useState(initialFormValues)
  const [error, setError] = useState('');

  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const requestToken = () => {
    axios.post(`http://localhost:5000/api/login`, credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        //redirect user to the bubble-page route
        push('/bubbles')
      })
      .catch(err => {
        console.log(err)
        setError('Username or Password not valid.');
      }
      );

  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    //prevent default so browser won't reload
    e.preventDefault();
    requestToken();
  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          name='username'
          value={credentials.username}
          onChange={handleChange}
          data-testid='username'
        />

        <label htmlFor='password'>Username</label>
        <input
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          data-testid='password'
        />
        <button>Login</button>
      </form>
      <div className='errors'>
        <p>{error}</p>
      </div>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. X
//2. Add whatever state nessiary for form functioning. X
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEST "username" and "password" RESPECTIVELY. X
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid. X
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage. X