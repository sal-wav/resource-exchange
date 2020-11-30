import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/' />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({
                email, username, password
            }))
                .catch((res) => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Passwords must match']);
    }

    return (
        <div id='formContainer'>
            <form id='signupForm' onSubmit={handleSubmit} >
                <p id='signupTitle'>Signup</p>
                <ul className={errors.length > 0 ? 'errors' : "hiddenErrors"}>
                    {errors.map((error, index) => <li className='error' key={index}>{error}</li>)}
                </ul>
                <input className='userInput' type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Name' required/>
                <input className='userInput' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required/>
                <input className='userInput' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'required/>
                <input className='userInput' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' required/>
                <button type='submit' id='signupBtn'>Signup</button>
            </form>
        </div>
    )
}

export default SignupFormPage;
