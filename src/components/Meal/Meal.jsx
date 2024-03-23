import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Meal = ({ meal }) => {
    const { idCategory, strCategory, strCategoryThumb } = meal;
    return (
        <div className='border w-2/3 mx-auto text-center border-blue-500 bg-blue-100 text-gray-700 text-lg font-semibold rounded-xl p-4'>
            <img src={strCategoryThumb} alt="" />
            <h3>Item: {strCategory}</h3>
            <Link to={`/meal/${idCategory}`}>
                <button className='px-4 py-2 mt-4 rounded-lg bg-blue-500 hover:bg-blue-900 text-white font-semibold'>
                    Know More!
                </button>
            </Link>
        </div>
    );
};

Meal.propTypes = {
    meal: PropTypes.object.isRequired,
}
export default Meal;