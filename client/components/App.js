import React from 'react';

export default class App extends React.Component {

    componentDidMount() {
        this.head = document.getElementsByTagName('head')[0];
        this.title = document.getElementsByTagName('title')[0];
        if (this.title === undefined) {
            this.title = document.createElement('title');
            this.head.appendChild(this.title);
        }

        this.title.textContent = 'Mounted';
    }

    componentDidUpdate() {
        this.title.textContent = 'Updated?';
    }

    render() {
        window.myState.loaded++;
        return <h1>Hello World? {window.myState.loaded}</h1>;
    }
}
