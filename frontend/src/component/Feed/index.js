import Fund from '../../../../backend/db/models';

const Feed = () => {
    const featured = await Fund.findAll({ order: ['title', 'ASC']});

    return (
        <div className='container'>
            <div className='featured'></div>
                <p>FEATURED</p>
                <img src={featured[0].image}></img>
                <a>{featured[0].title}</a>
                <p>{featured[0].subtitle}</p>
            <div className='recommended'></div>
                <p>RECOMMENDED FOR YOU</p>
                {featured.map((feature) => {
                    <>
                        <img src={feature.image}></img>
                        <a>{feature.title}</a>
                        <p>{feature.subtitle}</p>
                    </>
                })}
        </div>
    )
}

export default Feed;
