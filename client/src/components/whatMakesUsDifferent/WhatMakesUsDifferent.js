// React:
import React from 'react';

// Image:
import bg from '../../images/makesUsDifferent-removebg-preview.png';

// Style:
import {
	Description,
	Heading,
	Img,
	WhatMakesUsDifferentContainer,
} from '../../styles/WhatMakesUsDifferent.Styled';

function WhatMakesUsDifferent() {
	return (
		<WhatMakesUsDifferentContainer name='MakesUsDiffenet'>
			<Heading>WHAT MAKES US DIFFERENT</Heading>
			<Description>
				All of our employees are fully bilingual in Spanish and English and hold
				minimum bachelor’s degrees in varying professions. Because we live in
				and around the Andes Mountains and the cost of living is lower than the
				United States, you can be assured a higher education level and increased
				professionalism over a locally hired employee for the same wages.
				Additionally, 70% of our employees are expats, who hold dual
				nationalities, while the remaining 30% have lived or traveled
				extensively throughout the United States, Canada and Europe. This
				affords us a depth of knowledge about the culture, and the real estate
				culture, we service.
			</Description>
			<Img  src={bg} alt='no connection' />
		</WhatMakesUsDifferentContainer>
	);
}

export default WhatMakesUsDifferent;
