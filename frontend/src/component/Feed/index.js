import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as fundActions from "../../store/fund";
import { useParams } from 'react-router-dom';
import { receiveCategory } from "../../store/category";
import './Feed.css'

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
        <div className='feedContainer'>
            <div className='featured'>
                <p id='ftTitle'>FEATURED</p>
                <img id='ftImg' src={funds[0].image}></img>
                <a id='ftTitleLink'>{funds[0].title}</a>
                <p id='ftSubtitle'>{funds[0].subtitle}</p>
            </div>
            <div className='recommended'>
                <p id='rectitle'>RECOMMENDED FOR YOU</p>
                {funds.map((fund) => (
                    <div className='recPreview' key={`key-${fund.id}`}>
                        <img className='img' src={fund.image}></img>
                        <a className='titleLink'>{fund.title}</a>
                        <p className='subtitle'>{fund.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Feed;
