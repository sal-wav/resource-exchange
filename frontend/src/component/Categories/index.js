import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { receiveCategory } from "../../store/category";
import { useState, useEffect } from 'react';
import './Categories.css';

const Categories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(receiveCategory()).then(() => setIsLoading(false))
    }, [dispatch])

    const categories = useSelector(state => state.category.categories);
    if(isLoading) return null;

    return isLoading && (
        console.log('category list'),
        <ul>
            {categories.map(category => {
                <li>
                    <NavLink key={category.id} to={`/${category.name}`}>{category.name}</NavLink>
                </li>
            })}
        </ul>
    )
}

export default Categories;
