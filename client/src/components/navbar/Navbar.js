// React:
import React, { useState } from 'react';

// Apis:
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';

// Style:
import { Item, LinkAnchor, NavbarContainer } from '../../styles/Navbar.Styled';
import { useSelector } from 'react-redux';

import { styles } from './hamburger-Styles';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(true);
	const { width } = useSelector((state) => state.screen);
	console.log(isOpen);
	const Items = (
		<>
			<Item width={width}>
				<Link to='Home' smooth={'easeInOutQuad'} duration={1500}>
					HOME
				</Link>
			</Item>
			<Item width={width}>
				<Link to='AboutUs' smooth={'easeInOutQuad'} duration={1500}>
					ABOUT NDA
				</Link>
			</Item>
			<Item width={width}>
				<Link to='OurServices' smooth={'easeInOutQuad'} duration={1500}>
					OUR SERVICES
				</Link>
			</Item>
			<Item width={width}>
				<Link to='OurVision' smooth={'easeInOutQuad'} duration={1500}>
					OUR VISION
				</Link>
			</Item>
			<Item width={width}>
				<Link to='ContactUs' smooth={'easeInOutQuad'} duration={1500}>
					CONTACT
				</Link>
			</Item>
			<Item width={width}>
				<Link to='Career' smooth={'easeInOutQuad'} duration={1500}>
					CAREER OPPURTINITIES
				</Link>
			</Item>
		</>
	);

	const isMenuOpen = function (state) {
		return setIsOpen(!isOpen);
	};

	return (
		<NavbarContainer>
			{width <= 1130 ? (
				<Menu
					// onStateChange={isMenuOpen}
					right
					styles={styles}
				>
					{Items}
				</Menu>
			) : (
				Items
			)}
		</NavbarContainer>
	);
}
