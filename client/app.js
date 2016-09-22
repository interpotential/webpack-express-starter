import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

window.myState = {
    loaded: 1
};

setTimeout(function () {
    if (document.body.children.length === 0) {
        document.body.appendChild(document.createElement('div'));
    }
    ReactDOM.render(<App />, document.body.children[0]);
}, 1);

