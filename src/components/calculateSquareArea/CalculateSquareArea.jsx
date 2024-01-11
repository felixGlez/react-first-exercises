const CalculateSquareArea = (props) => {
    const squareArea = (props.side * props.side)
    return(
        <>
            <h5>2º Ejercicio</h5>
            <h2>El área del cuadrado es {squareArea}</h2>
        </>
    )
}

export default CalculateSquareArea;