const CalculateCircleArea = (props) => {
    const circleArea = props.pi * (props.radius * props.radius)
    return(
        <>
            <h5>4º Ejercicio</h5>
            <h2>El área del círculo es {circleArea}</h2>
        </>
    )
}

export default CalculateCircleArea;