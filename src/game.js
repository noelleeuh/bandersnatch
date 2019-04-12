import React from 'react';
import {LevelBox, Levels} from './levels';
import {AudioGame} from './audio_game';

export default class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentLevel: null
        };
        this.Levels = Levels;
        this.exit = this.exit.bind(this);
    }

    nextLevel (lvl, args) {
        if (lvl !== null) {
            this.setState((prevState, props) => {
                return {
                    currentLevel: lvl,
                    LevelArgs: args || prevState.LevelArgs
                };
            });
        }
    }

    restart() {
        window.location.replace('/play');
    }

    exit() {
        if (confirm('Are you sure you want to exit the game?')) {
            window.location.replace('/');
        }
    }

    backgroundStyle(){
        var colors = ['DarkTurquoise', 'Crimson', 'MediumVioletRed', 'MediumSeaGreen', 'Chocolate', 'Black', 'Silver', 'SlateBlue', 'Gold'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        $('body').css('background-color', randomColor);
    }

    componentDidMount () {
        this.nextLevel(this.Levels.Intro1);
    }

    render() {
        let game = {
            state: this.state,
            setState: this.setState.bind(this),
            Levels: this.Levels,
            nextLevel: this.nextLevel.bind(this),
        };

        return (
            <div className='game'>
                <LevelBox game = {game}/>
                <div className='side-buttons'>
                    <img id='game-logo' src='./img/mini_logo.png'/>
                    <button id='exit' onClick={this.exit}>Exit</button>
                    <button id='restart' onClick={this.restart}>Restart</button>
                    <button id='back-color' onClick={this.backgroundStyle}>Color</button>
                    <AudioGame/>
                </div>
            </div>
        );
    }
}
