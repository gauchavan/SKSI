import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

// to run this without node js server - use the sksiclient folder and run npm run start
// to build the react component after making any changees in sksiclient - run - npm run build

ReactDOM.render(<HomePage/>, document.getElementById("root"));