import React from 'react';
import {Image} from './game_components';

export class Level {
    constructor (level, text, buttons, img) {
        this.level = level;
        this.text = text;
        this.buttons = buttons;
        this.img = img;
    }

    loadLevel () {
        let type = typeof(this.level);

        if (type === 'string') {
            return this.level;
        } else {
            'Error: Invalid text type';
        }
    }

    levelImg () {
        let type = typeof(this.img);

        if (type === 'string') {
            return `/img/${this.img}`;
        } else {
            return 'Error: Invalid text type';
        }
    }

    levelTxt (game) {
        let type = typeof(this.text);

        if (type === 'function') {
            return this.text(game);
        } else {
            return 'Error: Invalid text type';
        }
    }
}


export class levelButton {
    constructor (buttonText, onClick, showButton) {
        this.buttonText = buttonText;
        this.onClick = onClick;
        this.showButton = showButton;
    }

    loadButtonText (game) {
        let type = typeof(this.buttonText);

        if (type === 'string') {
            return this.buttonText;
        } else {
            return 'Error: Text not valid';
        }
    }

    loadButton (game) {
        let type = typeof(this.showButton);

        if (type === 'string' || type === 'number') {
            return !!this.showButton;
        } else {
            return true;
        }
    }
}
