import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import Intro from './intro';
import Start from './start-game';
import Error from './error';

let elem;

if (location.pathname == '/') {
    elem = <Intro />;
} else if (location.pathname == '/start') {
    elem = <Start />;
} else if (location.pathname == '/play') {
    elem = <Game />;
} else {
    elem = <Error />;
}

ReactDOM.render(
    elem,
    document.querySelector('main')
);
