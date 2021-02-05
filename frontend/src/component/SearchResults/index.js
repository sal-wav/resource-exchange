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
                    <div key='result.id' className='resPreview'>
                        {result.image ?
                        <img alt="" className='resImg' src={result.image}></img> :
                        <img alt="" className='resImg' src="https://eatlocalapp.s3.amazonaws.com/RE.jpeg"></img>
                        }
                        <div className='caption'>
                            <a key={result.title} className='link' href={`/funds/${result.title}`}>{result.title}</a>
                            <p key={result.subtitle} className='subtitle'>{result.subtitle}</p>
                            <p key={result.funded} className='resFunded'>${result.funded} contributed</p>
                            <p key={result.goal} className='resGoal'>{Math.floor(result.funded / result.goal * 100)}% funded</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults;
