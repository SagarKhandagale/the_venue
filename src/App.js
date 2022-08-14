import React from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';

const App = () => {
  return (
    <div className="App">
      <Header />

      <>
        <Featured />
      </>

      <>
        <VenueInfo />
      </>

      <>
        <Highlights />
      </>

      <>
        <Pricing />
      </>

      <>
        <Location />
      </>

      <Footer />


    </div>
  );
}

export default App;
