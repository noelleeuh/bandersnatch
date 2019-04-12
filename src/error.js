import React from 'react';

export default class Error extends React.Component {
    componentDidMount() {
        $('body').css('background-color', 'tomato');
    }

    render() {
        return (
            <div className='error-not-found'>
                <h1>404 PAGE NOT FOUND</h1>
                <a href="./"><h3>Go to main page</h3></a>
            </div>
        );
    }
}
