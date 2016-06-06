import Option from './option.jsx';
import optionService from './data.js';

import React from 'react';
import ReactDOM from 'react-dom';

var myOption = optionService.myOptionService;

ReactDOM.render(<Option details={myOption}></Option>,document.getElementById('content'));

