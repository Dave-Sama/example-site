// React:
import { Element } from 'react-scroll';

// Apis:
import styledComponents from 'styled-components';
import tw from 'twin.macro';

// Images:
import bg from '../images/aboutUsBg.png';
import logo from '../images/logo.png';

export const AboutUsContainer = styledComponents(Element)`
    background-image:  url(${logo}), url(${bg});
    background-clip:border-box;
    background-repeat: no-repeat;
    background-size: 300px,cover;
    background-position: center bottom,center top;
${tw`
    width[100%]
    height[90vh]
    flex
    flex-col
    justify-center
    font-family['Open Sans', sans-serif]

    
`}
`;
export const InnerContainer = tw.div`
    mx-auto
    mb-36
    width[90%]
    lg:w-1/2
    height[fit-content]
    bg-white

`;
export const Heading = tw.h1`
    text-center
    letter-spacing[10px]
    word-spacing[5px]
    color[#3588CC]
    font-weight[600]
    text-4xl
    lg:text-4xl
    2xl:text-4xl
    mt-10
    lg:my-10
    line-height[1.2]
    `;
export const Description = tw.h1`
    width[80%]
    mx-auto
    // line-height[5px]
    text-justify
    color[#045184]
    font-size[2vh]
    lg:text-2xl
    md:font-size[1.5rem]
    sm:font-size[3vh]
    lg:my-12
    my-6
    
`;
