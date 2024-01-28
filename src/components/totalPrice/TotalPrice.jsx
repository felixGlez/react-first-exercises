const TotalPrice = props => {
	return (
		<h2>
			El precio total es de {props.price + (props.price * props.iva) / 100}€
		</h2>
	);
};
export default TotalPrice;
