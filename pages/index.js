import { Fragment } from 'react';
import Head from 'next/head';
import MetaTags from '../components/MetaTags';
import Header from '../components/Header';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Download from '../components/Download';
import Footer from '../components/Footer';
import "../node_modules/bulma/bulma.sass";
import "../styles/styles.scss";

export default () => (
    <Fragment>
        <Head>
            <MetaTags />
        </Head>
        <Header />
        <Hero />
        <Features />
        <Download />
        <Footer />
    </Fragment>
)