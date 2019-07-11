import { Fragment } from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Download from '../components/Download';
import Footer from '../components/Footer';
import "../node_modules/bulma/bulma.sass";

export default () => (
    <Fragment>
        <Header />
        <Hero />
        <Features />
        <Download />
        <Footer />
    </Fragment>
)