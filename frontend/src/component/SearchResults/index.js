import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './SearchResults.css';
import * as fundActions from "../../store/fund";

const SearchResults = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let funds = useSelector(state => state.fund.funds);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fundActions.receiveFund()).then(() => setIsLoading(false))
    }, [dispatch])

    useEffect(() => {
        let filteredResults = funds.filter(fund => (
            fund.title.includes(params.searchWord)
        ))
        setResults(filteredResults);
    }, [funds, params])

    let resultWord;
    if (results.length === 1) {
        resultWord = 'fund'
    } else if (results.length > 1) {
        resultWord = 'funds'
    }

    if (isLoading) return null;

    return (
        <div className='searchContainer'>
            <div className='resHeading'>
                <h2 className='text'>Looking for <span id='searchedWord'>{params.searchWord}</span> funds</h2>
            </div>
            <h3 id='explore' className='text'>Explore {results.length} {resultWord}</h3>
            <div className='resContainer'>
                {results.map(result => (
                    <div className='resPreview'>
                        <img className='resImg' src={result.image}></img>
                        <p>{result.title}</p>
                        <p>{result.subtitle}</p>
                        <p>${result.goal}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults;
