import React, { createContext, useState, useEffect, useRef } from "react";
const contentful = require("contentful");

export const DataContext = createContext();

const DataContextProvider = (props) => {
	const [foods, setFoods] = useState();
	const [activeCat, setActiveCat] = useState("");
	const starterRef = useRef(null);
	const saladRef = useRef(null);
	const pizzaRef = useRef(null);
	const mainRef = useRef(null);
	const drinksRef = useRef(null);
	const jump = (ref) => ref.current.scrollIntoView();

	const getFoods = () => {
		const client = contentful.createClient({
			space: "5rirqymvemuy",
			accessToken: "SZZ0p0N4PrE8_tLWaR-3jtuk2XxllTVeIEgV0fitExk",
		});
		client.getEntries().then((entries) => {
			const foodItems = entries.items.filter(
				(item) => item.sys.contentType.sys.id === "foodMenu"
			);
			setFoods(foodItems);
		});
	};

	useEffect(() => {
		getFoods();
	}, []);
	return (
		<DataContext.Provider
			value={{
				foods,
				starterRef,
				saladRef,
				pizzaRef,
				mainRef,
				drinksRef,
				jump,
				setActiveCat,
				activeCat,
			}}
		>
			{props.children}
		</DataContext.Provider>
	);
};

export default DataContextProvider;
