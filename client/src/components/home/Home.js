import React from 'react';
import {
	HomeContainer,
	LeftSector,
	RightSector,
	LogoImageContainer,
	ButtonRequest,
} from '../../styles/Home.Styled';
import logo from '../../images/logo.png';
import { useSelector } from 'react-redux';

function Home() {
	const { width } = useSelector((state) => state.screen);

	return (
		<HomeContainer name='Home' width={width}>
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
			<RightSector>f</RightSector>
		</HomeContainer>
	);
}

export default Home;
