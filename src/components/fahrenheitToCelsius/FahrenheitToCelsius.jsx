const FahrenheitToCelsius = props => {
	return (
		<h2>
			{props.degrees}ºF son {(props.degrees - 32) / 1.8}ºC
		</h2>
	);
};

export default FahrenheitToCelsius;
