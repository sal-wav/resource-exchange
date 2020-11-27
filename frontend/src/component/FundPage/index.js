import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as fundActions from "../../store/fund";
import "./FundPage.css";

const FundPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [fundResult, setFundResult] = useState(null)

    useEffect(() => {
        dispatch(fundActions.receiveFund()).then(() => setIsLoading(false))
    }, [dispatch])

    let funds = useSelector(state => state.fund.funds);

    useEffect(() => {
        let filteredFund = funds.filter(fund => (
            fund.title.includes(params.fundName)
        ))
        setFundResult(filteredFund[0]);
    }, [funds, params]);

    if(isLoading) return null;

    return (
        <div id='page'>
            <div className='pageContainer'>
                <div className='heading'>
                    <h2 id='fundTitle'>{fundResult.title}</h2>
                    <p id='fundSubtitle'>{fundResult.subtitle}</p>
                </div>
                <div className='fundContainer' >
                    <img id='image' src={fundResult.image}></img>
                    <p id='goal'>{fundResult.goal}</p>
                </div>
                <div className='descriptionContainer'>
                    <p>{fundResult.description}</p>
                </div>
            </div>
        </div>
    )
}

export default FundPage;
