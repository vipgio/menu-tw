const Card = ({ foodData }) => {
	return (
		<div>
			<div>
				<div className='food-item'>
					<img
						src={`https:${foodData.picture.fields.file.url}`}
						alt={foodData.picture.fields.title}
						className='w-56 h-56 rounded'
					/>
					<div className='flex flex-col m-2 mb-4 text-center min-h-[100px]'>
						<span className='font-bold text-black'>{foodData.name}</span>
						<span className='block text-gray-500'>{foodData.description}</span>
						<span
							className='text-black mt-auto'
							style={!foodData.available ? { textDecoration: "line-through" } : {}}
						>
							{foodData.price}
						</span>
					</div>
					{!foodData.available && (
						<div>
							{/*Sold out pill*/}
							<span className='text-white bg-red-500 rounded-full absolute bottom-0 right-0 mr-3 mb-3 p-0.5 px-1.5'>
								Sold out
							</span>
						</div>
					)}
					{foodData.vegan && (
						<div>
							{/*Vegan pill*/}
							<span className='text-white bg-green-500 rounded-full absolute left-0 top-0 ml-4 mt-4 p-2'>
								Vegan
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
