import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import FoodSection from "./FoodSection";

const Main = () => {
	const { foods, starterRef, saladRef, pizzaRef, mainRef, drinksRef } =
		useContext(DataContext);
	return foods ? (
		<div className='mt-20'>
			<div ref={starterRef}>
				<FoodSection name='starter' />
			</div>
			<div ref={saladRef}>
				<FoodSection name='salad' />
			</div>
			<div ref={pizzaRef}>
				<FoodSection name='pizza' />
			</div>
			<div ref={mainRef}>
				<FoodSection name='main dishes' />
			</div>
			<div ref={drinksRef}>
				<FoodSection name='drink' />
			</div>
		</div>
	) : (
		<div>hello</div>
	);
};

export default Main;
