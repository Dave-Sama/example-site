import React from 'react';
import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';

// style
import { HeaderContainer } from '../../styles/Header.Styled';
function Header() {
	return (
		<HeaderContainer>
			<Logo />
			<Navbar />
		</HeaderContainer>
	);
}

export default Header;
