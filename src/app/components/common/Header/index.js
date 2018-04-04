
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialNav from './SocialNav';


/**
 * -----------------------------------------------------------------------------
 * React Component: Header
 * -----------------------------------------------------------------------------
 */

class Header extends Component {
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
        let { backgroundImage, social, style = {}, marginBottom = 0 } = this.state;
        style = {...style, marginBottom, backgroundImage};

        return (
            <header style={style} ref={(elm) => { this.container = elm; }}>
                <div className={`shadow`} />
                <SocialNav {...social} />
            </header>
        );
    }
}

Header.defaultProps = {
    marginBottom: 0,
};

export default Header;

export { SocialNav }
