import React, { useEffect } from 'react';
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

import { useDispatch, useSelector } from 'react-redux';
import { setWidth } from './redux/features/Screen.Redux';

const App = () => {
	const { width } = useSelector((state) => state.screen);
	const dispatch = useDispatch();
	// console.log(`width: ${width}`);
	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	const updateDimensions = () => {
		dispatch(setWidth(window.innerWidth));
	};
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
