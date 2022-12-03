import React from 'react';
import {render} from 'react-dom';

const node = document.getElementById("root");
const root =
    React.createElement('div', {},
        React.createElement('h1', {}, "Hello World",
            React.createElement('a', {href: 'mailto:janwee_sha@outlook.com'},
                React.createElement('h1', {}, "React in Action"),
                React.createElement('em', {}, "...and now it really is!")
            )
        )
    );
render(root, node);
