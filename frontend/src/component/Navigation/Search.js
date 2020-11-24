import { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SearchButton = (props) => {
    const [showInput, setShowInput] = useState(false);
    const [value, setValue] = useState('');

    const openInput = () => {
        if (!showInput) {
            setShowInput(true);
        };
    }

    const closeInput = () => {
        setShowInput(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push(`/search/${value}`);
    }

    return (
        <>
            <button onClick={openInput}>
                Search
            </button>
            {showInput && (
                <>
                    <form onSubmit={handleSubmit}>
                        <input className='search' type='search' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search for funds or categories'/>
                    </form>
                    <button onClick={closeInput}>X</button>
                </>
            )}
        </>
    )
}

export default withRouter(SearchButton);
