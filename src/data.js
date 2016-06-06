var optionArray = {
	optionCount : [1,2,3,4],
	optionAnswers : ['India','Japan','Sri Lanka','Nepal'],
	optionName : 'countries'
};

function optionFunction() {
	return optionArray;
}

var optionService = {
	myOptionService : optionFunction()
}

export default optionService;
