// React:
import React from 'react';

// Images:

// Customer Support Icons:
import cs1 from '../../images/Customer Support Icons/cs1.png';
import cs2 from '../../images/Customer Support Icons/cs2.png';
import cs3 from '../../images/Customer Support Icons/cs3.png';
import cs4 from '../../images/Customer Support Icons/cs4.png';

// Admin Support Icons:
import as1 from '../../images/Admin Support Icons/as1.png';
import as2 from '../../images/Admin Support Icons/as2.png';
import as3 from '../../images/Admin Support Icons/as3.png';
import as4 from '../../images/Admin Support Icons/as4.png';
import as5 from '../../images/Admin Support Icons/as5.png';
import as6 from '../../images/Admin Support Icons/as6.png';
import as7 from '../../images/Admin Support Icons/as7.png';

// Style:
import {
	OurServicesContainer,
	LeftSector,
	RightSector,
	LogoImageContainer,
	ButtonRequest,
	CustomerSupportContainer,
	AdminSupportContainer,
	Span,
	SpanBold,
	CsInfo,
	CsLi,
	Heading,
	Description,
} from '../../styles/OurServices.Styled';

function OurServices() {
	return (
		<OurServicesContainer name='OurServices'>
			<LeftSector>
				<LogoImageContainer>
					<SpanBold>OUR</SpanBold>
					<Span>SERVICES</Span>
					<ButtonRequest> Request a Quote</ButtonRequest>
				</LogoImageContainer>
			</LeftSector>
			<RightSector>
				<CustomerSupportContainer>
					<CsInfo>
						<CsLi>
							<img className='inline-block' src={cs1} alt='no connection' />
							<Heading>CUSTOMER SUPPORT</Heading>
							<Description>
								Answer phone lines, manage live chats, set meetings and
								appointments
							</Description>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={cs2} alt='no connection' />
							<Heading>PROPERTY MANAGEMENT</Heading>
							<Description>Leasing </Description>
							<Description>24/7 Maintenance</Description>
							<Description> Secret Shops</Description>
							<Description>Customer Satisfaction Surveys</Description>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={cs3} alt='no connection' />
							<Heading>REAL ESTATE</Heading>
							<Description>Investor Relations and Sales</Description>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={cs4} alt='no connection' />
							<Heading>REPUTATION MANAGEMENT</Heading>
						</CsLi>
					</CsInfo>
				</CustomerSupportContainer>
				<AdminSupportContainer>
					<CsInfo>
						<CsLi>
							<img className='inline-block' src={as1} alt='no connection' />
							<Heading>VIRTUAL ASSISTANT​</Heading>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={as2} alt='no connection' />
							<Heading>MARKETING ​</Heading>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={as3} alt='no connection' />
							<Heading>ACCOUNTING ASSISTANT ​</Heading>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={as4} alt='no connection' />
							<Heading>HUMAN RESOURCES ​</Heading>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={as5} alt='no connection' />
							<Heading>LEASING AND SALES COMPARABLES​</Heading>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={as6} alt='no connection' />
							<Heading>DATA ENTRY</Heading>
						</CsLi>
						<CsLi>
							<img className='inline-block' src={as7} alt='no connection' />
							<Heading>QUAILITY CONTROL</Heading>
						</CsLi>
					</CsInfo>
				</AdminSupportContainer>
			</RightSector>
		</OurServicesContainer>
	);
}

export default OurServices;
