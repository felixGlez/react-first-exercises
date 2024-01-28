const CelsiusToFahrenheit = props => {
	return (
		<h2>
			{props.degrees}ºC son {props.degrees * 1.8 + 32}ºF
		</h2>
	);
};

export default CelsiusToFahrenheit;
