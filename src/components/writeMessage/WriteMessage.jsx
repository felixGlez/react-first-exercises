const WriteMessage = (props) => {
    console.log(props.data)

    return(
        <>
            <h5>8º Ejercicio</h5>
            <h2>{props.data[0]} ha pedido una caja de {props.data[1]} de tamaño {props.data[2]}. {props.data[3]}</h2>
        </>
    )
}

export default WriteMessage;