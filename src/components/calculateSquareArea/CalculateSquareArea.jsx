const CalculateSquareArea = props => {
	const squareArea = props.side * props.side;
	return (
		<>
			<h2>El área del círculo es {squareArea}</h2>
		</>
	);
};
export default CalculateSquareArea;
