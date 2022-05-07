// Apis:
import tw from 'twin.macro';
import { Element } from 'react-scroll';
import styledComponents from 'styled-components';

export const OurVisionContainer = tw(Element)`
    lg:height[fit-fit-content]
    background-color[rgb(16,46,82)]
    flex
    flex-col
    font-family['Open Sans', sans-serif]

`;
export const Heading = tw.h1`
    block
    mt-12
    lg:mt-20
    mb-10
    text-center
    
    font-weight[300]
    text-white
    text-6xl
`;
export const Description = tw.h1`
    block
    
    font-weight[100]
    lg:width[90%]
    mx-auto
    w-11/12
    // text-justify
    text-white
    // text-justify
    text-xl
    xl:text-xl
    2xl:text-2xl
    lg:height[18%]
    // p-1
    my-6
`;

export const Spacing = styledComponents.div`
    
    height: ${(props) => props.space}rem;
   ${tw`
    block
    // bg-red-200
    w-full
   `}
`;
