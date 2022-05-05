import React from 'react';
import {
	AboutUsContainer,
	Description,
	Heading,
	InnerContainer,
} from '../../styles/AboutUs.Styled';

import logo from '../../images/logo.png';

function AboutUs() {
	return (
		<AboutUsContainer name='AboutUs'>
			<InnerContainer>
				<Heading>ABOUT US</Heading>
				<Description>
					Next Door Alliance has over 15 years of experience in supporting
					industry leaders to fulfill their goals, through providing excellent
					support staffing. While the company has changed over the years, the
					vision and professional commitments have remained the same. We are
					here to help our clients manage and grow their business to its full
					potential.
				</Description>
			</InnerContainer>
			{/* <img
				className='w-1/5  mx-auto mb-10 bg-red-300  '
				src={logo}
				alt='no connection'
			/> */}
		</AboutUsContainer>
	);
}

export default AboutUs;
