import React from 'react';
import { Link } from 'react-scroll';
import {
	BackToTopContainer,
	Heading,
	Icon,
    LinkWrap,
} from '../../styles/BackToTop.Styled';

function BackToTop() {
	return (
		<BackToTopContainer>
			<LinkWrap>
				<Link to='Home' smooth={'easeInOutQuad'} duration={1500}>
					<Icon className='fa fa-angle-up' />
				</Link>
			</LinkWrap>

			<Heading> BACK TO TOP </Heading>
		</BackToTopContainer>
	);
}

export default BackToTop;
