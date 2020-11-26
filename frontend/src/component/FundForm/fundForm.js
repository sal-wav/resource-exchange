import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as fundActions from '../../store/fund';
import  { receiveCategory } from '../../store/category';

const FundForm = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [ showSubtitle, setShowSubtitle ] = useState(false);
    const [ showGoal, setShowGoal ] = useState(false);
    const [ showCategory, setShowCategory ] = useState(false);
    const [ showDescription, setShowDescription ] = useState(false);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState('');
    const [categoryId, setCategoryId] = useState(null);
    const [image, setImage] = useState('');

    useEffect(() => {
        dispatch(receiveCategory()).then(() => setIsLoading(false))
    }, [dispatch])

    const categories = useSelector(state => state.category.categories);

    const ownerId = useSelector(state => state.session.user.id);

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
        newFund = {
            title,
            subtitle,
            description,
            goal,
            image,
            categoryId,
            // ownerid
        }
        dispatch(fundActions.makeFund(newFund))

    }

    if(isLoading) return null;

    return (
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <input type='hidden' value={ownerId}></input>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' required></input>
                <button onClick={showSubtitleInput}>next</button>
                {showSubtitle && (
                    <>
                        <input value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder='subtitle'></input>
                        <button onClick={showGoalInput}>next</button>
                    </>
                )}
                {showGoal && (
                    <>
                        <input value={goal} onChange={(e) => setGoal(e.target.value)} placeholder='0.00'></input>
                        <button onClick={showDescriptionInput}>next</button>
                    </>
                )}
                {showCategory && (
                    <>
                        <select onChange={(e) => setCategoryId(e.target.value)}>
                            {categories.map((category) => (
                                <option value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </>
                )}
                {showDescription && (
                    <>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description'></textarea>
                        <button type='submit'>Post my fund</button>
                    </>
                )}

            </form>
        </div>
    )
}

export default FundForm;
