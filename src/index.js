/* const container = document.getElementById('app');
const element = document.createElement('h1');

element.innerText = 'Its working!! :)';

container.appendChild(element); */

import React from 'react'; // JSX
import ReactDOM from 'react-dom'; // Render to DOM

// Components
import Badge from './components/Badge';


const container = document.getElementById('app');
ReactDOM.render(<Badge />, container);