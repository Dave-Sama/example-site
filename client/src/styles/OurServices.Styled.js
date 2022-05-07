// Apis:
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { Element } from 'react-scroll';

// // Images:
// import cs from '../images/customerSupport.png';
// import as from '../images/adminSupport.png';

export const OurServicesContainer = styledComponents(Element)`
    ${tw`

        width[100%]
        lg:height[fit-content]
        // height[100vh]
        flex
        lg:justify-center
        flex-col
        lg:flex-row
    `}
`;

// ------------------------------------------------

export const LeftSector = tw.div`
    height[12%]
    lg:height[79vh]
    2xl:height[71vh]
    background-color[rgb(234, 244, 246)]

    lg:w-1/3
    lg:flex
    lg:font-family['Open Sans', sans-serif]

`;

export const RightSector = tw.div`
    font-family['Open Sans', sans-serif]
    height[fit-content]
    // bg-blue-200
    // height[40%]
    lg:w-2/3
    w-full
    flex
    flex-col
    lg:flex-row
    `;

// -----------------------------------------------

export const LogoImageContainer = tw.div`
    lg:my-20
    lg:mx-20
    mt-3
    inline-flex
    lg:inline-block
`;

// ------------------------------------------------

export const SpanBold = tw.span`
    color[#00305B]
    lg:block 
    lg:w-80 
    ml-10
 
    lg:font-weight[700]
    font-size[5vh]
    lg:font-size[3vw]
    lg:ml-10 
    
    
`;
export const Span = tw.span`
    color[#00305B]
    font-size[5vh]
    lg:block 
    m-auto
    // w-80  
    ml-10
    lg:font-size[3vw]
    
    `;

// -----------------------------------------------

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

// -----------------------------------------------

export const CustomerSupportContainer = styledComponents.div`
   
    ${tw`
        
        w-full
        lg:w-1/3
        lg:height[100%]
        background-size[100% 20%]
        // height[45%]
        // bg-red-200
        `}
        `;

export const AdminSupportContainer = styledComponents.div`

        ${tw`
        w-full
        background-size[100% 20%]
    lg:w-1/3
    lg:height[100%]
    // height[70vh]
    // bg-blue-400
`}
`;

// -----------------------------------------------

export const CustomerImg = styledComponents.img`
    ${tw`
        w-full
    `}
`;

export const CsInfo = styledComponents.ul`
${tw`
lg:width[99%]
lg:m-auto
// lg:my-28
// my-40
height[fit-content]
// bg-purple-400
`}
`;

export const CsLi = styledComponents.li`

    ${tw`
    w-11/12
    bg-gray-500/20
        mx-auto
        my-3
        p-2
        lg:p-0
    `}
`;

// -----------------------------------------------

export const Heading = styledComponents.p`

${tw`
        inline-block
        // bg-green-300
        lg:mx-2
         
        ml-10
        // text-center
        // mx-auto
        // ml-10 
        // border-b
        font-weight[500]
        font-size[15px]
    `}
`;
export const Description = styledComponents.p`

    ${tw`
        // bg-gray-200
    
        // text-center
        lg:text-align[left]
        my-2
        
        lg:mx-14 
        mx-20
        
        font-weight[400]
        lg:font-size[14px]
        font-size[15px]
        lg:width[80%]
        width[80%]
        text-blue-800
    `}
`;

// -----------------------------------------------
