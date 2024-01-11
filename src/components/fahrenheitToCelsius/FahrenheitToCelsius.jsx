const FahrenheitToCelsius = (props) => {
    const fahrenheitToCelsius = (props.degrees - 32) / 1.8
    return(
        <>
            <h5>6º Ejercicio</h5>
            <h2>{props.degrees}ºF = {fahrenheitToCelsius}ºC</h2>
        </>
    )
}

export default FahrenheitToCelsius;