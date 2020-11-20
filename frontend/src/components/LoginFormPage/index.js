import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if(sessionUser) return (
        <Redirect to='/' />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatchEvent(sessionActions.login({
            credential, password
        }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    return (
        <div id='formContainer'>
            <form id='loginForm' onSubmit={handleSubmit}>
                    <p id='loginTitle'>Log In</p>
                    <ul className='errors'>
                        {errors.map((error, index) => <li key={index}>{error}</li>)}
                    </ul>
                    <input className='input' type='text' value={credential} onChange={(e) => setCredential(e.target.value)} placeholder='Email' required/>
                    <input className='input' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
                    <button type='submit' id='loginBtn'>Log In</button>
            </form>
        </div>
    );
}

export default LoginFormPage;
