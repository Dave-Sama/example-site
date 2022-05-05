// Apis:
import tw from 'twin.macro';
import { Element } from 'react-scroll';

export const OurVisionContainer = tw(Element)`
    height[75vh]
    background-color[rgb(16,46,82)]
    flex
    flex-col
    font-family['Open Sans', sans-serif]

`;
export const Heading = tw.h1`
    block
    mt-20
    mb-10
    text-center
    
    font-weight[300]
    text-white
    text-6xl
`;
export const Description = tw.h1`
    block
    
    font-weight[100]
    w-2/3
    mx-auto
    text-white
    text-2xl
    height[18%]
`;
