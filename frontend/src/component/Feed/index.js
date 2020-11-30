import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as fundActions from "../../store/fund";
import {receiveUsers} from "../../store/users";
import './Feed.css'

const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fundActions.receiveFund()).then(() => setIsLoading(false))
    }, [dispatch]);

    let allFunds = useSelector(state => state.fund.funds);
    let funds = allFunds.slice(1, 4);

    if(isLoading) return null;

    return (
        <div className='feedContainer'>
            <div id='ftPreview'>
                <div className='featured' >
                    <h3 id='ftTitle'>FEATURED</h3>
                    <img id='ftImg' src={allFunds[0].image}></img>
                    <a id='ftTitleLink' href={`/funds/${allFunds[0].title}`}>{allFunds[0].title}</a>
                    <p id='ftSubtitle'>{allFunds[0].subtitle}</p>
                    <h2 id='ftFunded'>{allFunds[0].funded / allFunds[0].goal * 100}% Funded</h2>
                </div>
            </div>
            <div className='recommended'>
                <h3 id='recTitle'>RECOMMENDED FOR YOU</h3>
                <div className='previewContainer'>
                    {funds.map((fund) => (
                        <div className='recPreview' key={`key-${fund.id}`}>
                            <img className='img' src={fund.image}></img>
                            <div>
                                <a className='titleLink' href={`/funds/${fund.title}`}>{fund.title}</a>
                                <p className='subtitle'>{fund.subtitle}</p>
                                <h2 className='funded'>{Math.floor(fund.funded / fund.goal * 100)}% Funded</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feed;
