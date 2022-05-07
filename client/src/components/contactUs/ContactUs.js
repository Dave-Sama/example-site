import React from 'react';
import {
	Button,
	ContactUsContainer,
	FormContainer,
	Heading,
	Img,
	Input,
	LeftFrom,
	LeftSector,
	RightFrom,
	RightHeading,
	RightSector,
	Spacing,
	Text,
	TextArea,
} from '../../styles/ContactUs.Styled';

import ImgIcon from '../../images/ContactUsImg.png';
import { useSelector } from 'react-redux';

function ContactUs() {
	const { width } = useSelector((state) => state.screen);

	return (
		<ContactUsContainer name='ContactUs'>
			<LeftSector>
				<Heading>CONTACT NEXT DOOR ALLIANCE</Heading>
				<Img src={ImgIcon} alt='No connection..' />
			</LeftSector>
			<RightSector>
				<RightHeading>
					<b>You Can Reach Us -</b> Fill out the form below to be contacted by a
					representative, call or use the chat button below. We are here and
					looking forward to talking with you.
				</RightHeading>
				<Spacing space={5}> </Spacing>
				<Text margin={width}>
					<b>Email:</b> info@nextdooralliance.com
				</Text>
				<Text margin={width}>
					<b>Tel:</b> 310-853-1339
				</Text>
				<Spacing space={4}> </Spacing>
				<Text margin={width}>
					For any general inquiries, or to schedule a call to go over what we
					have to offer, please fill in the following contact form:
				</Text>
				<Spacing space={2}> </Spacing>
				<FormContainer>
					<LeftFrom>
						<Text>
							<b>Name *</b>
						</Text>
						<Input />
						<Text>
							<b>Email *</b>
						</Text>
						<Input />
						<Text>
							<b>Subject *</b>
						</Text>
						<Input />
					</LeftFrom>
					<RightFrom>
						<Text>
							<b>Message *</b>
						</Text>
						<TextArea rows={6} />
					</RightFrom>
				</FormContainer>
				<Button> SEND ME A QUOTE TODAY! </Button>
			</RightSector>
		</ContactUsContainer>
	);
}

export default ContactUs;
