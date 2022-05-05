// Apis:
import tw from 'twin.macro';
// import { Element } from 'react-scroll';
import styledComponents from 'styled-components';
import bg from '../images/bgRec.png';

export const RecomendationsContainer = styledComponents.div`

    background-image:url(${bg});
    background-size:cover;
    background-repeat: no-repeat;
    // background-blend-mode: color-dodge;
    
    ${tw`
        height[65vh]
        flex
    `}
    

`;
export const Item = tw.div`
block  
w-1/3


`;
export const Heading = tw.h1`
    block
    mt-10
    mb-10
    text-center
    font-family['Cormorant Garamond', serif ]
    color[#FF6161]
    text-4xl
`;
export const Description = tw.h1`
    block
    width[49%]
    mx-auto
    // color[#000000]
    text-xl
    font-weight[500]
    text-black
    font-family['Cormorant Garamond', serif ]
    text-center
    height[18%]
`;

export const Quote = tw.i`
    block
    mt-6
    font-size[2vw]
    color[rgb(242, 121, 121)]
`;

//242, 121, 121)
