
/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import React, { Component, Fragment } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Hero from '../Hero';
import Nav from '../Nav';



/**
 * -----------------------------------------------------------------------------
 * React Component: Page
 * -----------------------------------------------------------------------------
 */

class Page extends Component {
    constructor(props) {
        super(props);
        this.mb     = 0;
        this.header = null;
        this.navbar = null;
        this.state  = Object.assign({}, this.props);
    }

    componentDidMount() {
        if (this.state.hasOwnProperty('onMount')) {
            this.state.onMount(this);
        }

        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        this.setState((prevState) => {
            return Object.assign({}, prevState, nextProps);
        });
    }

    onScroll(e) {
        if (this.navbar === null || this.header === null) { return; }
        let navHeight = this.navbar.container.getBoundingClientRect().height;
        let { top, height } = this.header.container.getBoundingClientRect();

        top += height;

        let margin = (top < 0) ? navHeight : 0;

        if (this.mb !== margin) {
            this.mb = margin;
            this.setState({headerMarginBottom: margin, navbarFixed: (margin !== 0)});
        }
    }

    renderChildren() {
        let { features } = this.state;

        if (!features) { return null; }

        let { items = [], layout = [] } = features;
        let count = 0;

        return (
            <section className={'feature'}>
                {items.map((item, i) => {
                    let { title, caption, backgroundImage } = item;

                    count += 2;

                    let orderLeft = (count%4 === 0) ? count : count - 1;
                    let orderRight = (count%4 === 0) ? count - 1 : count;

                    return (
                        <Fragment key={`feature-${i}`}>
                            <div className={`feature-block ${layout[0]} order-${orderLeft}`}>
                                <div className={`feature-caption`}>
                                    <h2>{title}</h2>
                                    <p>{caption}</p>
                                </div>
                            </div>
                            <div className={`feature-block ${layout[1]} order-${orderRight}`} style={{backgroundImage}} />
                        </Fragment>
                    );
                })}
            </section>
        );
    }

    render() {
        let { children = [], footer, header, hero, nav, loading, headerMarginBottom = 0, navbarFixed = false } = this.state;

        if (header) {
            header['marginBottom'] = headerMarginBottom;
        }
        if (nav) {
            nav['fixed'] = navbarFixed;
        }

        return (
            <main role={'main'}>
                {(!header) ? null : <Header {...header} ref={(elm) => { this.header = elm; }} />}
                {(!nav) ? null : <Nav {...nav} ref={(elm) => { this.navbar = elm; }} /> }
                {(!hero) ? null : <Hero {...hero} />}
                {this.renderChildren()}
                {(!footer) ? null : <Footer {...footer} />}
            </main>
        )
    }
}

export default Page;
