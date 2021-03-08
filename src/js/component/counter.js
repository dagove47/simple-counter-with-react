import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Counter(props) {
	return (
		<div className="counterBox">
			<div className="clock">
				<i className="fas fa-clock"></i>
			</div>
			<div className="numSix">{props.six}</div>
			<div className="numFive">{props.five}</div>
			<div className="numFour">{props.four}</div>
			<div className="numThree">{props.three}</div>
			<div className="numTwo">{props.two}</div>
			<div className="numOne">{props.one}</div>
		</div>
	);
}

Counter.propTypes = {
	six: PropTypes.number,
	five: PropTypes.number,
	four: PropTypes.number,
	three: PropTypes.number,
	two: PropTypes.number,
	one: PropTypes.number
};
