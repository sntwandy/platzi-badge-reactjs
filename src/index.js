import React from 'react'; // JSX
import ReactDOM from 'react-dom'; // Render to DOM

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// Components
// import Badge from './components/Badge';
// import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';


const container = document.getElementById('app');
ReactDOM.render(<Badges />, container);