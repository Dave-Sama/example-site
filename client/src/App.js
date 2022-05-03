import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import OurServices from './components/ourServices/OurServices';

const App = () => {
	return (
		<>
			<Header />
			<Home />
			<OurServices />
			<Home />
		</>
	);
};

export default App;
