import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
    const { categories } = useLoaderData();
    console.log(categories);
    return (
        <div>
            {
                categories.map((item, idx) => <p className="text-lg border-2 rounded-md p-6 font-medium my-10 w-2/3 mx-auto" key={idx}>{item.strCategory}: {item.strCategoryDescription}</p>)
            }
        </div>
    );
};

export default MealDetails;