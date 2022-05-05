import React from 'react';
import AboutUs from './components/aboutUs/AboutUs';
import BackToTop from './components/backToTop/BackToTop';
import Career from './components/career/Career';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MoreInfo from './components/moreInfo/MoreInfo';
import OurServices from './components/ourServices/OurServices';
import OurVision from './components/ourVision/OurVision';
import Recomentadions from './components/recomendations/Recomendations';
import WhatMakesUsDifferent from './components/whatMakesUsDifferent/WhatMakesUsDifferent';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<OurServices />
			<OurVision />
			<AboutUs />
			<WhatMakesUsDifferent />
			<Career />
			<Recomentadions />
			<ContactUs />
			<MoreInfo />
			<BackToTop />
			<Footer />
		</>
	);
};

export default App;
