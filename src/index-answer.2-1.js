import React, {Component} from 'react';
import {render} from "react-dom";
import PropTypes from 'prop-types';

const node = document.getElementById("root");

class YourRepo extends Component {
    render() {
        return React.createElement(
            'div',
            {
                className: "boxed-group"
            },
            React.createElement(
                'div',
                {
                    className: 'boxed-group-action'
                }
            ),
            React.createElement(
                'h3',
                {},
                "Your repositories",
                React.createElement(
                    'span',
                    {
                        className: 'counter'
                    },
                    this.props.count
                )
            ),
            React.createElement(
                'button',
                {
                    className: 'boxed-group-inner'
                },
                'New Repository'
            )
        )
    }
}

YourRepo.propTypes = {
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
};

const App = React.createElement(
    YourRepo,
    {
        // id: 1,
        count: '180'
    });

render(App, node);