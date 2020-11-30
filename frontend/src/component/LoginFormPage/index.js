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
        return dispatch(sessionActions.login({
            credential, password
        }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    const demoLogin = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({
            credential: 'demo@user.io',
            password: 'password'
        }));
    };

    return (
        <div id='formContainer'>
            <form id='loginForm' onSubmit={handleSubmit}>
                    <p id='loginTitle'>Log In</p>
                    <ul className={errors.length > 0 ? 'errors' : "hiddenErrors"}>
                        {errors.map((error, index) => <li className='error' key={index}>{error}</li>)}
                    </ul>
                    <input className='userInput' type='text' value={credential} onChange={(e) => setCredential(e.target.value)} placeholder='Email' required/>
                    <input className='userInput' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
                    <button type='submit' className='loginBtn'>Log In</button>
                    <button className='loginBtn' id='demo' onClick={demoLogin}>Log In As Demo User</button>
            </form>
        </div>
    );
}

export default LoginFormPage;
