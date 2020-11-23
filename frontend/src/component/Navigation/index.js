import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink id='login' to='/login'>Log in</NavLink>
                <NavLink id='signup' to='/signup'>Sign up</NavLink>
            </>
        );
    }

    return (
        <ul>
            <li className='center'>
                <NavLink id='home' to='/'exact={true}>Home</NavLink>
            </li>
            <li className='right'>
                <button id='search'>Search</button>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;
