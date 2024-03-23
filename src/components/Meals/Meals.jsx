import { useLoaderData } from "react-router-dom";
import Meal from '../Meal/Meal'

const Meals = () => {
    // const { categories } = useLoaderData();
    const mealsData = useLoaderData();
    const meals = mealsData.categories;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
            {
                meals.map(meal => <Meal key={meal.idCategory} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;