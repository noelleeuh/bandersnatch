import React from 'react';

export default class Intro extends React.Component {
    constructor () {
        super();
        this.pressEnter = this.pressEnter.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keypress', this.pressEnter);
    }

    pressEnter(e){
        if (e.which === 13) {
            window.location.replace('/start');
        }
    }

    render() {
        return (
            <div className='intro'>
                <img id='intro-logo' src='./img/logo.png' />
                <span className='intro-blinking'><h1>PRESS ENTER TO START</h1></span>
                <audio id='audio-game' src='./audio/intro.wav' type='audio/wav' autoPlay loop />
            </div>
        );
    }
}
