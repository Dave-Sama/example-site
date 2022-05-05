import React from 'react';
import { FooterContainer, Text } from '../../styles/Footer.Styled';

function Footer() {
	return (
		<FooterContainer>
			<Text>
				&copy; by Knoll & Walters LLP. Proudly created with{' '}
				<a href='https://Wix.com' target='_blank'>
					Wix.com{' '}
				</a>
				( And copied by David :3 )
			</Text>
		</FooterContainer>
	);
}

export default Footer;
