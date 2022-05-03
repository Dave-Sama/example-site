import React from 'react';
import {
	HomeContainer,
	LeftSector,
	RightSector,
	LogoImageContainer,
	ButtonRequest,
} from '../../styles/Home.Styled';
import logo from '../../images/logo.png';
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
			{/* <RightSector></RightSector> */}
		</HomeContainer>
	);
}

export default Home;
