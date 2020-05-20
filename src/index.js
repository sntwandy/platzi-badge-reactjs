import React from 'react'; // JSX
import ReactDOM from 'react-dom'; // Render to DOM

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// Components
import Badge from './components/Badge';


const container = document.getElementById('app');
ReactDOM.render(
<Badge
    firstName="Megan"
    lastName="Herrera"
    avatarUrl = "https://i.imgur.com/q31Oq0S.jpg"
    jobTitle="Criminology"
    twitter="meganhrra"
/>,
container);