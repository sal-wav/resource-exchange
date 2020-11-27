import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './SearchResults.css';
import * as fundActions from "../../store/fund";
import ResultMessage from "./ResultMessage";

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
            fund.title.toLowerCase().includes(params.searchWord.toLowerCase())
        ))
        setResults(filteredResults);
    }, [funds, params])

    if (isLoading) return null;

    return (
        <div className='searchContainer'>
            <ResultMessage results={results}/>
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
