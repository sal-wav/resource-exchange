import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as fundActions from '../../store/fund';
import { receiveCategory } from "../../store/category";
import React, { useState, useEffect } from "react";

const CategoryResults = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);
    // const funds = useSelector(state => state.fund.funds);
    // const categories = useSelector(state => state.category.categories);
    // const category = categories.filter(category => (
    //     category.name === params.categoryName
    // ))
    useEffect(() => {
        dispatch(receiveCategory()).then(() => setIsLoading(false))
    }, [dispatch])

    if(isLoading) return null;

    // useEffect(() => {
    //     let filteredResults = funds.filter(fund => (
    //         fund.categoryId === (category.id)
    //     ))
    //     setResults(filteredResults);
    // }, [funds, params])

    return (
        <p>{params.categoryName}</p>
    )

}

export default CategoryResults;
