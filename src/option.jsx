import React from 'react';

	var optionStyle = {
		'fontSize' : '1.2em',
		'paddingLeft' : '10px',
		'marginTop': '5px'
	};

export default class Option extends React.Component {

	constructor(props) {
		super(props);
		this.details = props.details;
	}

	getOptionArray() {
		var optionArray = this.details.values.map((item, index) =>
			<div className="radio" style={optionStyle} key={index}>
				<label>
					<input type = 'radio' name ={this.details.name} value={item.value}
					className="form-control" />
					{item.displayName}
				</label>
			</div>
			);
		return optionArray;
	}

	render() {
		var thisOptionArray = this.getOptionArray();
		return (
			<form>
				<div className="form-group">
					{thisOptionArray}
				</div>
			</form>
		);
	}
}
