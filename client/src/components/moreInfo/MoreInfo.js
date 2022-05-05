import React from 'react';
import {
	Button,
	Description,
	Heading,
	LeftSector,
	MoreInfoContainer,
	RightSector,
} from '../../styles/MoreInfo.Styled';

function MoreInfo() {
	return (
		<MoreInfoContainer>
			<LeftSector>
				<Heading>Need more information?</Heading>
				<Description>
					We will be happy to explain you more about our services, let's talk
				</Description>
			</LeftSector>
			<RightSector>
				<Button>REQUEST A QUOTE</Button>
			</RightSector>
		</MoreInfoContainer>
	);
}

export default MoreInfo;
