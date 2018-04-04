
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


/**
 * -----------------------------------------------------------------------------
 * React Component: Nav
 * -----------------------------------------------------------------------------
 */

class Nav extends Component {
    constructor(props) {
        super(props);
        this.container = null;
        this.state = Object.assign({}, this.props);
    }

    componentDidMount() {
        if (this.state.hasOwnProperty('onMount')) {
            this.state.onMount(this);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            return Object.assign({}, prevState, nextProps);
        });
    }

    render() {
        let { buttons, fixed = false } = this.state;

        return (
            <nav ref={(elm) => { this.container = elm; }} className={(fixed === true) ? 'fixed' : ''}>
                <div>
                    <ul>
                        {buttons.map((item, i) => {
                            return <li key={`nav-${i}`}><NavLink {...item}>{item.label}</NavLink></li>
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
