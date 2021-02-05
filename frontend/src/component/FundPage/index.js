import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as fundActions from "../../store/fund";
import { receiveExchanges } from "../../store/exchange";
import "./FundPage.css";

const FundPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [fundResult, setFundResult] = useState(null);
    const [exchangeResults, setExchangeResults] = useState([]);

    useEffect(() => {
        dispatch(fundActions.receiveFund())
        .then(dispatch(receiveExchanges()))
        .then(() => setIsLoading(false))
    }, [dispatch])

    let funds = useSelector(state => state.fund.funds);
    let exchanges = useSelector(state => state.exchanges.exchanges);

    useEffect(() => {
        let filteredFund = funds.filter(fund => (
            fund.title.includes(params.fundName)
        ));
        setFundResult(filteredFund[0]);
        // if (exchanges ) {
        //     let filteredExchanges = exchanges.filter(exchange => (
        //         exchange.fundId === fundResult.id
        //     ));
        //     setExchangeResults([...filteredExchanges]);
        // };
    }, [funds, params]);

    useEffect(() => {
        if (fundResult) {
            let filteredExchanges = exchanges.filter(exchange => (
                exchange.fundId === fundResult.id
            ));
            setExchangeResults([...filteredExchanges]);
        }
    }, [fundResult, exchanges])

    if(isLoading || !fundResult) return null;

    return (
        <div id='page'>
            <div className='pageContainer'>
                <div className='heading'>
                    <h2 id='fundTitle'>{fundResult.title}</h2>
                    <p id='fundSubtitle'>{fundResult.subtitle}</p>
                </div>
                <div className='fundContainer' >
                    { fundResult.image ?
                    <img alt='fundImage' id='image' src={fundResult.image}></img> :
                    <img alt='fundImage' id='image' src="https://eatlocalapp.s3.amazonaws.com/RE.jpeg"></img>
                    }
                    <div className='goalContainer'>
                        <h2 id='funded'>${fundResult.funded}</h2>
                        <p id='goal'> contributed of ${fundResult.goal} goal</p>
                        <div className='exchanges'>
                            {exchangeResults.map(exchange => (
                                <div key={exchange.id} className="exchangeContainer">
                                    <h2 className='amount'>Contribute ${exchange.amount} or more</h2>
                                    <h3 className='exchangeTitle'>{exchange.title}</h3>
                                    <p className='exchangeDes'>{exchange.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='descriptionContainer'>
                    <h1 id='storyHead'>My Story</h1>
                    <p id='story'>{fundResult.description}</p>
                </div>
            </div>
        </div>
    )
}

export default FundPage;
