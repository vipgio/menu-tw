import { useContext } from "react";
import Card from "../assets/Card";
import { DataContext } from "../context/DataContext";

const FoodSection = ({ name }) => {
	const { foods } = useContext(DataContext);
	return (
		<div>
			<div className='category-title'>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
			<div className='mt-8 grid md:grid-cols-3 gap-10 py-8 px-16'>
				{foods
					.filter((item) => item.fields.category === name)
					.map((food, index) => (
						<Card foodData={food.fields} key={index} />
					))}
			</div>
		</div>
	);
};

export default FoodSection;
