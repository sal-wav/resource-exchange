import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as fundActions from "../../store/fund";
import { receiveCategory } from "../../store/category";
import { useParams } from 'react-router-dom';

const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState(undefined);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundActions.receiveFund()).then(() => setIsLoading(false))
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(receiveCategory()).then(() => setIsLoading(false))
    // }, [dispatch])

    // if(params.category) {
    //     let categoryName = params.category;
    //     const categories = useSelector(state => state.category.categories);
    //     const allFunds = useSelector(state => state.fund.funds);
    //     let funds = allFunds.categoryId === params.category
    // } else {
    // }
    let funds = useSelector(state => state.fund.funds);

    if(isLoading) return null;

    return (
        <div className='container'>
            <div className='featured'>
                <p>FEATURED</p>
            </div>
                <img src={funds[0].image}></img>
                <a>{funds[0].title}</a>
                <p>{funds[0].subtitle}</p>
            <div className='recommended'></div>
                <p>RECOMMENDED FOR YOU</p>
                {funds.map((fund) => (
                    <div key={`key-${fund.id}`}>
                        <img src={fund.image}></img>
                        <a>{fund.title}</a>
                        <p>{fund.subtitle}</p>
                    </div>
                ))}
        </div>
    )
}

export default Feed;
