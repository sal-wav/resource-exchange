import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

const ProfileButton = ({user}) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (!showMenu) {
            setShowMenu(true);
        };
    }

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <>
            <button className='btn' onClick={openMenu}>
                <i className="far fa-smile"></i>
            </button>
            {showMenu && (
                <div className='dropdownContainer'>
                    <ul id='dropdown'>
                        <li className='dropdownContent' id='hello'>Hello,</li>
                        <li className='dropdownContent' id='name'>{user.username}</li>
                        <li className='dropdownContent'>
                            <button className='btn' onClick={logout}>Log Out?</button>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default ProfileButton;
