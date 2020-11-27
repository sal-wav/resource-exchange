import { useParams } from 'react-router-dom';
import './SearchResults.css';

const ResultMessage = ({results}) => {
    const params = useParams();

    let resultWord;
    let resultMessage;

    if (results.length === 1) {
        resultWord = 'fund';
    } else if (results.length > 1) {
        resultWord = 'funds';
    }

    if (results.length === 0) {
        resultMessage = (
            <>
            <div className='resHeading'>
                <h2 className='text'>We couldn't find <span id='searchedWord'>{params.searchWord}</span> funds </h2>
            </div>
            <div className='messageContainer'>
                <h1 id='try' className='text'>Try our categories!</h1>
            </div>
        </>
        )
    } else {
        resultMessage = (
            <>
                <div className='resHeading'>
                    <h2 className='text'>Looking for <span id='searchedWord'>{params.searchWord}</span> funds</h2>
                </div>
                <h3 id='explore' className='text'>Explore {results.length} {resultWord}</h3>
            </>
        );

    }
    return (
        <>
        {resultMessage}
        </>
    )
}

export default ResultMessage;
