import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as fundActions from "../../store/fund";

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
        <>
            <p>{fundResult.title}</p>
            <p>{fundResult.subtitle}</p>
            <div className='fundContainer' >
                <img src={fundResult.image}></img>
                <p>{fundResult.goal}</p>
            </div>
            <div className='descriptionContainer'>
                <p>{fundResult.description}</p>
            </div>
        </>
    )
}

export default FundPage;
