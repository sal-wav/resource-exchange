import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as fundActions from '../../store/fund';

const FundForm = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [ showSubtitle, setShowSubtitle ] = useState(false);
    const [ showGoal, setShowGoal ] = useState(false);
    const [ showDescription, setShowDescription ] = useState(false);
    const [title, setTitle] = useState('');

    // const [ showSubtitle, setShowSubtitle ] = useState(false);

    const showSubtitleInput = (e) => {
        e.preventDefault();
        setShowSubtitle(true);
    }

    const showGoalInput = (e) => {
        e.preventDefault();
        setShowGoal(true);
    }

    const showDescriptionInput = (e) => {
        e.preventDefault();
        setShowDescription(true);
    }

    let newFund;


    const handleSubmit = (e) => {
        e.preventDefault();
        // newFund = {
        //     title,
        //     subtitle: newSubtitle,
        //     goal: newGoal,
        //     description: newDescription,
        // }
        dispatch(fundActions.makeFund(newFund))

    }

    if(isLoading) return null;

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' required></input>
                <button onClick={showSubtitleInput}>next</button>
                {showSubtitle && (
                    <>
                        <input value={newSubtitle} placeholder='subtitle'></input>
                        <button onClick={showGoalInput}>next</button>
                    </>
                )}
                {showGoal && (
                    <>
                        <input value={newGoal} placeholder='goal'></input>
                        <button onClick={showDescriptionInput}>next</button>
                    </>
                )}
                {showDescription && (
                    <>
                        <textarea value={newDescription} placeholder='description'></textarea>
                        <button type='submit'>Post my fund</button>
                    </>
                )}

            </form>
        </div>
    )
}

export default FundForm;
