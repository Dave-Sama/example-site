import React from 'react';
import {
	HomeContainer,
	LeftSector,
	RightSector,
	LogoImageContainer,
	ButtonRequest,
} from '../../styles/Home.Styled';
import logo from '../../images/logo.png';

import { ParallaxBanner } from 'react-scroll-parallax';
import bg from '../../images/bg.jpg';

// const Home = () => {
// 	return (
// 		<ParallaxBanner
// 			layers={[{ image: { bg }, speed: -15 }]}
// 			className='aspect-[2/1]'
// 		>
// 			<HomeContainer name='Home'>
// 				<LeftSector>
// 					<LogoImageContainer>
// 						<img src={logo} alt='co connection' />
// 						<span className=' inline-block w-80  text-center  text-lg text-white'>
// 							Managing the needs of today so that you can focus on tomorrow's
// 							growth
// 						</span>
// 						<ButtonRequest> Request a Quote</ButtonRequest>
// 					</LogoImageContainer>
// 				</LeftSector>
// 			</HomeContainer>
// 		</ParallaxBanner>
// 	);
// };

function Home() {
	return (
		<HomeContainer name='Home'>
			<LeftSector>
				<LogoImageContainer>
					<img src={logo} alt='co connection' />
					<span className=' inline-block w-80  text-center  text-lg text-white'>
						Managing the needs of today so that you can focus on tomorrow's
						growth
					</span>
					<ButtonRequest> Request a Quote</ButtonRequest>
				</LogoImageContainer>
			</LeftSector>
		</HomeContainer>
	);
}

export default Home;
