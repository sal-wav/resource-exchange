import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as fundActions from '../../store/fund';
import  { receiveCategory } from '../../store/category';
import './fundForm.css';

const FundForm = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [ showTitle, setShowTitle ] = useState(false);
    const [ showSubtitle, setShowSubtitle ] = useState(false);
    const [ showGoal, setShowGoal ] = useState(false);
    const [ showDescription, setShowDescription ] = useState(false);
    const [ showImage, setShowImage ] = useState(false);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState('');
    const [categoryId, setCategoryId] = useState(2);
    const [image, setImage] = useState('');

    useEffect(() => {
        dispatch(receiveCategory()).then(() => setIsLoading(false))
    }, [dispatch])

    const categories = useSelector(state => state.category.categories);

    const ownerId = useSelector(state => state.session.user.id);

    const showTitleInput = (e) => {
        e.preventDefault();
        setShowTitle(true);
    }

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

    const showImageInput = (e) => {
        e.preventDefault();
        setShowImage(true);
    }

    let newFund;


    const handleSubmit = (e) => {
        e.preventDefault();
        newFund = {
            title,
            subtitle,
            description,
            goal,
            funded: 0,
            image,
            categoryId,
            ownerId
        };
        dispatch(fundActions.makeFund(newFund));
        props.history.push('/');
    }

    if(isLoading) return null;

    return (
        <div className='formContainer'>
            <h1 id='fundHeader'>Start a fund</h1>
            <h2 id='fundSubhead'>First, select a category</h2>
            <form onSubmit={handleSubmit}>
                <input type='hidden' value={ownerId}></input>
                <select className='input' id='selectCat' onChange={(e) => setCategoryId(e.target.value)}>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <button className='formBtn' onClick={showGoalInput}>next: goal</button>
                {showGoal && (
                    <>
                        <input className='input' type='number' value={goal} onChange={(e) => setGoal(e.target.value)} placeholder='$0'></input>
                        <button className='formBtn' onClick={showTitleInput}>next: title</button>
                    </>
                )}
                {showTitle && (
                    <>
                        <input className='input' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title' required></input>
                        <button className='formBtn' onClick={showSubtitleInput}>next: subtitle</button>
                    </>
                )}
                {showSubtitle && (
                    <>
                        <input className='input' value={subtitle} onChange={(e) => setSubtitle(e.target.value)} placeholder='subtitle'></input>
                        <button className='formBtn' onClick={showDescriptionInput}>next: your story</button>
                    </>
                )}
                {showDescription && (
                    <>
                        <textarea className='input' id='des' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Tell us about you.'></textarea>
                        <button className='formBtn' onClick={showImageInput}>next: image</button>
                    </>
                )}
                {showImage && (
                    <>
                        <input className='input' value={image} onChange={(e) => setImage(e.target.value)} placeholder='image url'></input>
                        <button id='postBtn' className='formBtn' type='submit'>Post my fund</button>
                    </>
                )}

            </form>
        </div>
    )
}

export default withRouter(FundForm);
