import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as fundActions from '../../store/fund';
import React, { useState, useEffect } from "react";

const CategoryResults = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [pageCategory, setPageCategory] = useState([])
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fundActions.receiveFund()).then(() => setIsLoading(false))
    }, [dispatch])

    const funds = useSelector(state => state.fund.funds);
    const categories = useSelector(state => state.category.categories);

    useEffect(() => {
        let filteredCategory = categories.filter(category => (
            category.name === params.categoryName
        ));
        setPageCategory(filteredCategory[0]);
    }, [categories, params]);

    useEffect(() => {
        let filteredResults = funds.filter(fund => (
            fund.categoryId === (pageCategory.id)
        ))
        setResults(filteredResults);
    }, [funds, pageCategory])

    if(isLoading) return null;


    return (
        <div className='categoryResults'>
            <div className='resHeading'>
                <h2 className='text'>Looking for <span id='searchedWord'>{params.categoryName}</span> funds</h2>
            </div>
            <h3 id='explore' className='text'>Explore {results.length} funds</h3>
            <div className='resContainer'>
                {results.map((result) => (
                    <div key={result.id} className='resPreview'>
                        <img className='resImg' src={result.image}></img>
                        <div className='caption'>
                            <a className='link' href={`/funds/${result.title}`}>{result.title}</a>
                            <p className='subtitle'>{result.subtitle}</p>
                            <p className='resFunded'>${result.funded} contributed</p>
                            <p className='resGoal'>{Math.floor(result.funded / result.goal * 100)}% funded</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default CategoryResults;
