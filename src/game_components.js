import React, { Component } from 'react';
import TypeIt from 'typeit';

export class Location extends Component {
    render() {
        return (
            <h3 className='lvl-location'>
                Location: {this.props.text}
            </h3>
        );
    }
}

export class LevelContent extends Component {
    constructor () {
        super();
        this.state = {
            animatedText: true,
        };
        this.typewriterOn = this.typewriterOn.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.pressEnter);
        this.setState({
            animatedText: true
        });
    }

    typewriterOn() {
        if (this.state.animatedText) {
            this.setState({
                animatedText: false
            });
        } else if (!this.state.animatedText) {
            this.setState({
                animatedText: true
            });
        }
    }

    render() {
        var text, image = [];
        if (this.props.currentLevel !== null) {
            text = this.props.currentLevel.levelTxt(this.props.game);
            image = this.props.currentLevel.levelImg(this.props.game);
            new TypeIt('#lvl-txt', {
                strings: text,
                speed: 60,
                waitUntilVisible: true,
            }).go();
        }

        return (
            <div className='lvl-content'>
                <img id='lvl-img' src={image} />
                <p className={this.state.animatedText ? 'unhidden' : 'hidden'} id='lvl-txt'></p>
                <p className={this.state.animatedText ? 'hidden' : 'unhidden'} id='lvl-txt-2'>{text}</p>
                {this.state.animatedText ?
                    <button id='anim-button' onClick={this.typewriterOn} type='button'>Typer OFF</button> :
                    <button id='anim-button' onClick={this.typewriterOn} type='button'>Typer ON</button>}
            </div>
        );
    }
}

export class Button extends Component {
    render() {
        return (
            <button className='button' onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}
