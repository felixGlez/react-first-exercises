const CalculateTriangleArea = (props) => {
    const triangleArea = (props.base * props.height) / 2
    return(
        <>
            <h5>3º Ejercicio</h5>
            <h2>El área del triángulo es {triangleArea}</h2>
        </>
    )
}

export default CalculateTriangleArea;