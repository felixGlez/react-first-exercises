import CalculateCircleArea from "./components/calculateCircleArea/CalculateCircleArea";
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsiusToFahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenheitToCelsius/FahrenheitToCelsius";
import SayHello from "./components/sayhello/SayHello";
import TotalPrice from "./components/totalPrice/TotalPrice";
import WriteMessage from "./components/writeMessage/WriteMessage";

const App = () => {
	return(
		<>
			<SayHello name = 'Pepe'/>
			<CalculateSquareArea side = {5}/>
			<CalculateTriangleArea base = {3} height = {8}/>
			<CalculateCircleArea radius = {8} pi = {3.14}/>
			<CelsiusToFahrenheit degrees = {30}/>
			<FahrenheitToCelsius degrees = {86}/>
			<TotalPrice price = {50} iva = {21}/>
			<WriteMessage data = {['Félix', 'camisetas', 'XL', 'note']}/>
		</>
	)
};




export default App;