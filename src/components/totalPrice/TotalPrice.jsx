const TotalPrice = (props) => {
    const finalPrice = props.price + (props.price * props.iva / 100)
    return(
        <>
            <h5>7º Ejercicio</h5>
            <h2>El precio final es {finalPrice}€</h2>
        </>
    )
}
export default TotalPrice;