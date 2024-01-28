const WriteMessage = props => {
	return (
		<h2>
			{props.message[0]} ha pedido una caja de {props.message[1]} de tamaño{' '}
			{props.message[2]}. {props.message[3]}
		</h2>
	);
};

export default WriteMessage;
