import { Fragment } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Body from '../components/Body';
import Footer from '../components/Footer';
import "../node_modules/bulma/bulma.sass";

export default () => (
    <Fragment>
        <Header />
        <Hero />
        <Body />
        <Footer />
    </Fragment>
)