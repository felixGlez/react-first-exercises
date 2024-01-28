import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import SayHello from './components/sayhello/SayHello';
import TotalPrice from './components/totalPrice/TotalPrice';
import WriteMessage from './components/writeMessage/WriteMessage';

const App = () => {
	return (
		<>
			<SayHello name='Hola' />
			<CalculateSquareArea side={30} />
			<CalculateTriangleArea base={20} height={40} />
			<CalculateCircleArea radius={15} pi={3.14} />
			<CelsiusToFahrenheit degrees={25} />
			<FahrenheitToCelsius degrees={77} />
			<TotalPrice price={35} iva={21} />
			<WriteMessage message={['Pepe', 'algodón', 'M', 'Nota']} />
		</>
	);
};

export default App;
