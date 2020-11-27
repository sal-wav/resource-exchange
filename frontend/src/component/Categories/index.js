import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import './Categories.css';

const Categories = ({ isLoaded }) => {

    const categories = useSelector(state => state.category.categories);

    if(!isLoaded) return null;

    return (
        <ul className='categoryContainer'>
            {categories.map((category) => (
                <li className='category' key={category.id}>
                    <NavLink className='link' activeClassName='activeLink' to={`/categories/${category.name}`}>{category.name}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default Categories;
