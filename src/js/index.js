//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.js";

//render your react application
let countNum = 0;
setInterval(function() {
	const sixthNum = Math.floor(countNum / 100000);
	const fifthNum = Math.floor(countNum / 10000);
	const fourthNum = Math.floor(countNum / 1000);
	const thirdNum = Math.floor(countNum / 100);
	const secondNum = Math.floor(countNum / 10);
	const firstNum = Math.floor(countNum);

	ReactDOM.render(
		<Counter
			one={firstNum % 10}
			two={secondNum % 10}
			three={thirdNum % 10}
			four={fourthNum % 10}
			five={fifthNum % 10}
			six={sixthNum % 10}
		/>,
		document.querySelector("#app")
	);
	countNum++;
}, 1000);
