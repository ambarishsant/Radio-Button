import React from 'react';

	var optionStyle = {
		'font-weight' : 'normal',
		'font-size' : '1.2em',
		'padding-left' : '30px',
		'line-height' : '40px'	
	}; 

export default class Option extends React.Component {

	constructor(props) {
		super(props);
		this.details = {
					optionCount : props.details.optionCount,
					optionAnswers : props.details.optionAnswers,
					optionName : props.details.optionName
		};
	}

	getOptionArray() {
		var optionArray = this.details.optionCount.map((item) => 
			<input type = 'radio' name ={this.details.optionName} value={this.details.optionAnswers[item]}>
			<span style={optionStyle}>{this.details.optionAnswers[item]}</span>
			</input>
			);
	}

	render() {
		var thisOptionArray = this.getOptionArray();
		return (
			<div class = 'row'>
				{thisOptionArray};
			</div>
		);
	}
}
