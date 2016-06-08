var optionArray = {
	name : 'countries',
	values : [
		{
			displayName: 'India',
			value: 'india',
			correct: false
		},
		{
			displayName: 'Japan',
			value: 'japan',
			correct: false
		},
		{
			displayName: 'Sri Lanka',
			value: 'sri_lanka',
			correct: false
		},
		{
			displayName: 'Nepal',
			value: 'nepal',
			correct: true
		}
	]
};

function optionFunction() {
	return optionArray;
}

var optionService = {
	myOptionService : optionFunction()
}

export default optionService;
