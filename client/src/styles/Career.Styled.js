// Apis:
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { Element } from 'react-scroll';

// Images:
import bg from '../images/careerBg.png';

export const CareerContainer = styledComponents(Element)`
    ${tw`
        width[100%]
        height[90vh]
        flex
       
        justify-center
    `}
`;

export const RightSector = tw.div`
 
    h-full
    // background-color[rgb(234, 244, 246)]
    w-2/3
    lg:w-1/2
    flex
    flex-col
    bg-gray-500/20

`;

export const LeftSector = styledComponents.div`
background-image:  url(${bg});
    ${tw`
        background-position[60%]
        
        background-blend-mode[overlay]
        background-repeat[no-repeat]
        lg:background-size[cover]
        2xl:background-size[150%]
        background-size[cover]
        h-full
        bg-gray-300
        lg:w-1/2
        w-1/3
        flex 
        flex-col
        
    `}

`;

export const LogoImageContainer = tw.div`
    my-20
    mx-20
`;

export const SpanBold = tw.span`
    color[#00305B]
    block 
    lg:w-1/3  
    w-2/3  
    font-weight[700]
    lg:font-size[3vw]
    font-size[7vw]
    text-white
    ml-10
    mt-20
    font-family['Open Sans', sans-serif]
    
`;
export const Span = tw.span`
    color[#00305B]
    block 
    // lg:w-80  
    width[80%]  
    ml-10
    my-4
    sm:font-size[2vh]
    lg:font-size[2vw]
    font-size[4vw]
    2xl:font-size[3vh]
    font-family['Open Sans', sans-serif]

    
`;
export const ButtonRequest = tw.button`
    hover:transition[0.2s all ease-out]
    hover:background-color[#f28a83]
    block
    background-color[#FF6161]
    border-2
    font-size[17px]
    text-white
    my-10    
    ml-10    
    width[200px]
    height[60px]
    font-family['Open Sans', sans-serif]

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
