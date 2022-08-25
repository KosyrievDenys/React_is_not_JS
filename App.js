import './App.css';
import React from 'react';
import { useState } from 'react';

//! HTML:
// <form>
//   <input type="number" name="num1">
//   <input type="number" name="num2">
//   <input type="submit" value="Sum">
// </form>
// <div class="out"></div>

//! JS:
// document.querySelector('form').addEventListener('submit', function(event){
//   event.preventDefault();
	
//   // получаем num1
//   let num1 = +event.target.elements.num1.value;
//   // получаем num2
//   let num2 = +event.target.elements.num2.value;
	
//   // выводим
//   document.querySelector('.out').textContent = num1 + num2;
// });
//! React
function App() {

	const [a, setA] = useState(0); // определили начальное значение и тип
	const [b, setB] = useState(0); // определили начальное значение и тип
 
	const formHandler = (event) => {
	  event.preventDefault(); 
		//если в форме нажать кнопку то загружается страница указанная в атрибуте action формы. 
		//Если такого атрибута нет то перезагружается страница. 
		//Єтот механизм (event.preventDefault()) позволяет обрабатывать формы в php, python без JS. 
		//Мы отключаем подобное обновление страницы
	  setA(+event.target.elements.num1.value);
	  setB(+event.target.elements.num2.value);
	}
 
  return (
	<div className="App">
	  <form onSubmit={formHandler}>
			<input type="number" name ="num1" defaultValue={a}/>
			<input type="number" name ="num2" defaultValue={b} />
			<input type="submit" value = "Sum" />
	  </form>
	  <div className ="out">{a + b}</div>
	</div>
  );
 }

export default App;
