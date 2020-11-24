import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as fundActions from "../../store/fund";

const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fundActions.receiveFund()).then(() => setIsLoading(false))
    }, [dispatch])

    const funds = useSelector(state => state.fund.funds);
    console.log(funds);

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
