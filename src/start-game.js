import React from 'react';

export default class Start extends React.Component {
    constructor () {
        super();
        this.pressEnter = this.pressEnter.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keypress', this.pressEnter);
        $('*').css('background', 'black');
    }

    pressEnter(e){
        if (e.which === 13) {
            window.location.replace('/play');
        }
    }

    render() {
        return (
            <div className='start'>
                <h1 id='start-title'>Welcome to Bandersnatch!</h1>
                <h3 id='start-text'>
                Bandersnatch is an interactive game based and named after
                the film in the science fiction anthology series Black Mirror.
                In Bandersnatch, you make decisions for English 19-year-old Stefan Butler,
                a young fellow who knows exactly what he is passionate about: Videogames!
                For the past months, he has been adapting a "choose your own adventure" book
                into what he hopes will be a revolutionary adventure video game.
                You will given choices that you can click on.
                These will mostly determine how the game plays as there are different endings
                to it. So, choose wisely.
                </h3>
                <span className='intro-blinking'><h3>PRESS ENTER TO CONTINUE</h3></span>
                <audio id='audio-game' src='./audio/start.wav' type='audio/wav' autoPlay loop />
            </div>
        );
    }
}
