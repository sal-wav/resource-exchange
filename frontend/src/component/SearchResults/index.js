import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

const SearchResults = () => {
    const [results, setResults] = useState([]);
    let funds = useSelector(state => state.fund.funds);
    const params = useParams();

    useEffect(() => {
        let filteredResults = funds.filter(fund => (
            fund.title.includes(params.searchWord)
        ))
        setResults(filteredResults);
    }, [funds, params])

    return (
        <div className='container'>
            {results.map(result => {
                return (
                    <p key={result.id}>
                        {result.title}
                    </p>
                )
            })}
        </div>
    )
}

export default SearchResults;
