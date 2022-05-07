import React from 'react';

import {
	Description,
	Heading,
	OurVisionContainer,
	Spacing,
} from '../../styles/OurVision.Styled';

function OurVision() {
	return (
		<OurVisionContainer name='OurVision'>
			<Heading>OUR VISION</Heading>
			<Description>
				Next Door Alliance began in 2012 as a small leasing call center for a
				Los Angeles based Property Management Company. Within a month the
				leasing call center grew to a 20 person team and we expanded into
				maintenance, marketing, accounts payable, accounts receivable, sales,
				property management and virtual assistance.
			</Description>
			<Spacing space={0.5} />
			<Description>
				Not only were our bilingual skills highly desirable, but our dedication
				and enthusiasm were just what was needed to rejuvenate the client's
				company. Our team was generating and managing over 20,000 customer
				contacts per month and successfully maintaining one the highest
				conversion rates in the industry.
			</Description>
			<Spacing space={0.5} />
			<Description>
				Now, we are bringing this experience to help many others build their
				businesses by increasing communication, shortening timelines, and
				creating a better overall customer and client experience, nationwide.
			</Description>
		</OurVisionContainer>
	);
}

export default OurVision;
