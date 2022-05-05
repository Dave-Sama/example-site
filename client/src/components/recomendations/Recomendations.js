// React:
import React from 'react';

// Images:
import rec1 from '../../images/Recomendations/rec1.png';
import rec2 from '../../images/Recomendations/rec2.png';
import rec3 from '../../images/Recomendations/rec3.png';

// Style:
import {
	Description,
	Heading,
	Item,
	Quote,
	RecomendationsContainer,
} from '../../styles/Recomentadions.Styled';

function Recomentadions() {
	return (
		<RecomendationsContainer name='Recomendations'>
			<Item>
				<img
					className='rounded-full mx-auto mt-20 grayscale'
					src={rec1}
					alt='connection error'
				/>
				<Heading>Amy Sievers, Owner</Heading>
				<Description>
					Being able to step away from my phone and not worry about losing
					customers has been life changing! I feel like I can finally focus on
					my creative work without worrying!
					<Quote className='fa fa-quote-right' />
				</Description>
			</Item>
			<Item>
				<img
					className='rounded-full mx-auto mt-20 grayscale'
					src={rec2}
					alt='connection error'
				/>
				<Heading>ZIVO CREATIVE</Heading>
				<Description>
					Focusing on growing my business without the worry of dropping the ball
					with customer service has been amazing. I wish I had done this 5 years
					ago. Thank you NDA!!
					<Quote className='fa fa-quote-right' />
				</Description>
			</Item>
			<Item>
				<img
					className='rounded-full mx-auto mt-20 grayscale'
					src={rec3}
					alt='connection error'
				/>
				<Heading>TRINO SECURITY</Heading>

				<Description>
					I am busy. I am always on the go and can not afford for my clients to
					wait for answers. Kelly and her team have been professional and have
					gone above my expectations.
					<Quote className='fa fa-quote-right' />
				</Description>
			</Item>
		</RecomendationsContainer>
	);
}

export default Recomentadions;
