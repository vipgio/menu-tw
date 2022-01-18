import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Navbar = () => {
	const {
		starterRef,
		saladRef,
		pizzaRef,
		mainRef,
		drinksRef,
		jump,
		activeCat,
		setActiveCat,
	} = useContext(DataContext);
	return (
		<div>
			<div>
				<ul className='fixed top-0 z-20 bg-gray-300 flex overflow-x-auto min-w-full gap-x-10 max-w-xs shadow-lg rounded p-2 sm:justify-evenly sm:w-full whitespace-nowrap'>
					<button
						className='navbar-button'
						onClick={() => {
							jump(starterRef);
							setActiveCat("starter");
						}}
						style={activeCat === "starter" ? { backgroundColor: "#f3f4f6" } : {}}
					>
						Starter
					</button>
					<button
						className='navbar-button'
						onClick={() => {
							jump(saladRef);
							setActiveCat("salad");
						}}
						style={activeCat === "salad" ? { backgroundColor: "#f3f4f6" } : {}}
					>
						Salad
					</button>
					<button
						className='navbar-button'
						onClick={() => {
							jump(pizzaRef);
							setActiveCat("pizza");
						}}
						style={activeCat === "pizza" ? { backgroundColor: "#f3f4f6" } : {}}
					>
						Pizza
					</button>
					<button
						className='navbar-button'
						onClick={() => {
							jump(mainRef);
							setActiveCat("main");
						}}
						style={activeCat === "main" ? { backgroundColor: "#f3f4f6" } : {}}
					>
						Main dishes
					</button>
					<button
						className='navbar-button'
						onClick={() => {
							jump(drinksRef);
							setActiveCat("drinks");
						}}
						style={activeCat === "drinks" ? { backgroundColor: "#f3f4f6" } : {}}
					>
						Drinks
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
