import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as fundActions from '../../store/fund';

export const CategoryResults = () => {
    const params = useParams();
    const funds = useSelector(state => state.fund.funds);
    const categories = useSelector(state => state.category.categories);
    const category = categories.filter(category => (
        category.name = params.category
    ))

    useEffect(() => {
        let filteredResults = funds.filter(fund => (
            fund.categoryId === (category.id)
        ))
        setResults(filteredResults);
    }, [funds, params])

    return (
        <p>hi</p>
    )

}
