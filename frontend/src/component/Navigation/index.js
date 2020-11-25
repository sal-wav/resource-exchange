import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchButton from './Search';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    let redirect;
    if (sessionUser) {
        redirect = '/fund-form'
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        redirect = '/login'
        sessionLinks = (
            <>
                <NavLink id='login' to='/login'>Log in</NavLink>
                <NavLink id='signup' to='/signup'>Sign up</NavLink>
            </>
        );
    }

    return (
        <ul className='navbar'>
            <li>
                <NavLink to={redirect} >Start a fund</NavLink>
            </li>
            <li className='center'>
                <NavLink id='home' to='/'exact={true}>Home</NavLink>
            </li>
            <li className='right'>
                <SearchButton />
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;
