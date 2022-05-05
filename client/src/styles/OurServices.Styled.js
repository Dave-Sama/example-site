// Apis:
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { Element } from 'react-scroll';

// Images:
import cs from '../images/customerSupport.png';
import as from '../images/adminSupport.png';

export const OurServicesContainer = styledComponents(Element)`
    ${tw`
        width[100%]
        height[60vh]
        flex
        justify-center
    `}
`;

export const LeftSector = tw.div`
 
    height[510px]
    background-color[rgb(234, 244, 246)]
    w-1/3
    flex
    font-family['Open Sans', sans-serif]

`;

export const LogoImageContainer = tw.div`
    my-20
    mx-20
`;

export const SpanBold = tw.span`
    color[#00305B]
    block 
    w-80  
    font-weight[700]
    font-size[3vw]
    ml-10
    
    
`;
export const Span = tw.span`
    color[#00305B]
    block 
    w-80  
    ml-10
    font-size[3vw]
    
`;
export const ButtonRequest = tw.button`
    
    block
    background-color[#0F4c85]
    border-2
    font-size[17px]
    font-family[a'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif]
    text-white
    my-10    
    ml-10    
    width[150px]
    height[40px]
`;

export const RightSector = tw.div`
font-family['Open Sans', sans-serif]

    bg-white
    w-2/3
    flex
`;
export const CustomerSupportContainer = styledComponents.div`
    background-image: url(${cs});
    background-size:contain;
    background-repeat: no-repeat;
    ${tw`
        w-1/3
        height[100%]
        
    `}
`;
export const CsInfo = styledComponents.ul`
    ${tw`
        width[99%]
        m-auto
        my-28
        height[fit-content]
    `}
`;

export const CsLi = styledComponents.li`

    ${tw`
        w-11/12
        mx-auto
        my-2
    `}
`;
export const Heading = styledComponents.p`

    ${tw`
        inline
        mx-2 
        font-weight[500]
        font-size[18px]
    `}
`;
export const Description = styledComponents.p`

    ${tw`
        my-1.5
        mx-14 
        font-weight[400]
        font-size[14px]
        width[80%]
        text-blue-800
    `}
`;

export const AdminSupportContainer = styledComponents.div`
background-image: url(${as});
background-size:contain;
background-repeat: no-repeat;
${tw`
    w-1/3
    height[100%]
`}
`;
