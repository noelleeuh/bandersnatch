import React from 'react';
import {Button} from './game_components';

export class Buttons extends React.Component {
    render () {
        return (
            <div className='lvl-buttons'>
                {((this.props.currentLevel !== null) ? this.props.currentLevel.buttons.map((button, index) => {
                    if (button.loadButton(this.props.game)) {
                        return (
                            <Button
                                key={"game-button"}
                                text={button.loadButtonText(this.props.game)}
                                onClick={() => button.onClick(this.props.game)}
                            />
                        );
                    }
                    return false;
                }) : false)}
            </div>
        );
    }
}
