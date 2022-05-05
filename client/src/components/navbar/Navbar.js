// React:
import React from 'react';

// Apis:
import { Link } from 'react-scroll';

// Style:
import { Item, LinkAnchor, NavbarContainer } from '../../styles/Navbar.Styled';

export default function Navbar() {
	return (
		<NavbarContainer>
			<Item>
				<Link to='Home' smooth={'easeInOutQuad'} duration={1500}>
					HOME
				</Link>
			</Item>
			<Item>
				<Link to='AboutUs' smooth={'easeInOutQuad'} duration={1500}>
					ABOUT NDA
				</Link>
			</Item>
			<Item>
				<Link to='OurServices' smooth={'easeInOutQuad'} duration={1500}>
					OUR SERVICES
				</Link>
			</Item>
			<Item>
				<Link to='OurVision' smooth={'easeInOutQuad'} duration={1500}>
					OUR VISION
				</Link>
			</Item>
			<Item>
				<Link to='ContactUs' smooth={'easeInOutQuad'} duration={1500}>
					CONTACT
				</Link>
			</Item>
			<Item>
				<Link to='Career' smooth={'easeInOutQuad'} duration={1500}>
					CAREER OPPURTINITIES
				</Link>
			</Item>
		</NavbarContainer>
	);
}
