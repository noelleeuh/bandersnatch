import React from 'react';

export class AudioGame extends React.Component {
    constructor () {
        super();
        this.state = {
            mute: true,
            unmute: false
        };
        this.muteSound = this.muteSound.bind(this);
        this.unmuteSound = this.unmuteSound.bind(this);
    }

    muteSound () {
        if (this.state.mute == true) {
            document.getElementById('audio-game').muted = true;
            this.setState({
                mute: false,
                unmute: true
            });
        }

    }

    unmuteSound () {
        if (this.state.mute == false) {
            document.getElementById('audio-game').muted = false;
            this.setState({
                mute: true,
                unmute: false
            });
        }
    }

    render() {
        return (
            <div className='lvl-audio'>
                <audio id='audio-game' src='./audio/game.wav' type='audio/wav' autoPlay loop />
                {this.state.mute ?
                    <button onClick={this.muteSound} type='button'>Mute</button> :
                    <button onClick={this.unmuteSound} type='button'>Unmute</button>}
            </div>
        );
    }
}
