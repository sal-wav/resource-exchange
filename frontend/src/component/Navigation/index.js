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
                <NavLink id='login' className='link' to='/login'>Log in</NavLink>
                <NavLink id='signup' className='link' to='/signup'>Sign up</NavLink>
            </>
        );
    }

    return (
        <ul className='navbar'>
            <li className='left'>
                <NavLink className='link' to={redirect} >Start a fund</NavLink>
            </li>
            <li className='center'>
                <NavLink className='link' id='home' to='/'exact={true}>Home</NavLink>
            </li>
            <li className='right'>
                <SearchButton />
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;
