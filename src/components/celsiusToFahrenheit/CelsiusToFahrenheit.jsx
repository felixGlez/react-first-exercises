const CelsiusToFahrenheit = (props) => {
    const celsiusToFahrenheit = (props.degrees * 1.8) + 32
    return(
        <>
            <h5>5º Ejercicio</h5>
            <h2>{props.degrees}ºC = {celsiusToFahrenheit}ºF</h2>
        </>
    )
}

export default CelsiusToFahrenheit