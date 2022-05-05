import React from 'react';
import {
	ButtonRequest,
	CareerContainer,
	LeftSector,
	LogoImageContainer,
	RightSector,
	Span,
	SpanBold,
} from '../../styles/Career.Styled';

function Career() {
	return (
		<CareerContainer name='Career'>
			<LeftSector>
				<LogoImageContainer></LogoImageContainer>
			</LeftSector>
			<RightSector>
				<SpanBold>BE A PART OF OUR TEAM</SpanBold>
				<Span>
					As our clients grow, so do we. NDA is always looking for talented hard
					working team members.
				</Span>
				<Span>
					To learn more about what it takes to be a part of the NDA workforce,
					click below for more information and to fill out an online
					application.
				</Span>
				<ButtonRequest> GET MORE INFO</ButtonRequest>
			</RightSector>
		</CareerContainer>
	);
}

export default Career;
