import { useState } from 'react';

const FundForm = () => {
    const [ showSubtitle, setShowSubtitle ] = useState(false);
    const [ showGoal, setShowGoal ] = useState(false);
    const [ showDescription, setShowDescription ] = useState(false);
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

    return (
        <div className='formContainer'>
            <form>
                <input placeholder='title' required></input>
                <button onClick={showSubtitleInput}>next</button>
                {showSubtitle && (
                    <>
                        <input placeholder='subtitle'></input>
                        <button onClick={showGoalInput}>next</button>
                    </>
                )}
                {showGoal && (
                    <>
                        <input placeholder='goal'></input>
                        <button onClick={showDescriptionInput}>next</button>
                    </>
                )}
                {showDescription && (
                    <>
                        <textarea placeholder='description'></textarea>
                        <button type='submit'>Post my fund</button>
                    </>
                )}

            </form>
        </div>
    )
}

export default FundForm;
