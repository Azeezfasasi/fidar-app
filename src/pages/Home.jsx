import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../assets/components/Home/Nav';
import Hero from '../assets/components/Home/Hero';
import Clients from '../assets/components/Home/Clients';
import Support from '../assets/components/Home/Support';
import KeyFeatures from '../assets/components/Home/KeyFeatures';
import Benefits from '../assets/components/Home/Benefits';
import WaitingList from '../assets/components/Home/WaitingList';
import Faq from '../assets/components/Home/Faq';
import ChoosePlan from '../assets/components/Home/ChoosePlan';
import Footer from '../assets/components/Home/Footer';

function Home() {
  return (
    <>
    <Helmet>
        <title>Home - Fidar</title>
    </Helmet>
    <Nav />
    <Hero />
    <Clients />
    <Support />
    <KeyFeatures />
    <Benefits />
    <WaitingList />
    <Faq />
    <ChoosePlan />
    <Footer />
    </>
  )
}

export default Home