import { Element } from 'react-scroll';
import styledComponents from 'styled-components';
import tw from 'twin.macro';

import bg from '../images/bg-contactUs.jpg';
export const ContactUsContainer = styledComponents(Element)`
    background-image: url(${bg}), linear-gradient(to left, rgba(0, 91, 156,0.9), rgba(0, 91, 156,0.9));
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;

    ${tw`
        height[90vh]
        flex
    `}
`;

export const LeftSector = tw.div`
    background-color[rgba(0, 49, 91,0.5)]
    w-1/3
    flex
    flex-col
`;
export const RightSector = tw.div`
    
    w-2/3
`;

export const Heading = tw.h1`
   text-white
   width[55%]
   text-center
   text-6xl
   mx-auto
   mt-28
`;
export const RightHeading = tw.h1`
   text-white
   width[45%]
   text-2xl
   ml-20
   mt-28
`;
export const Text = styledComponents.p`
    margin-left: ${(props) => props.margin}rem;
${tw`
    text-white
    width[55%]
    text-xl
    
`}
   
`;

export const Spacing = styledComponents.div`
    
    height: ${(props) => props.space}rem;
   ${tw`
    block
    w-full
   `}
`;

export const Img = tw.img`
    width[200px]
    height[200px]
    mx-auto
    mt-5
`;

export const FormContainer = tw.div`
    flex
    ml-20
    width[55%]
    height[13rem]
`;
export const LeftFrom = tw.div`
    mx-auto
    w-1/2
`;
export const RightFrom = tw.div`
    mx-auto
    w-1/2
`;
export const Input = tw.input`
mt-1
p-1
mx-auto
width[95%]
hover:bg-blue-300
    transition-all
`;
export const TextArea = tw.textarea`
    mt-1
    p-1
    mx-auto
    width[95%]
    hover:bg-blue-300
    transition-all
    height[77%]
    `;

export const Button = tw.button`
        ml-20
        mt-5
        width[55%]
        height[5%]
        border-2
        text-white
        background-color[#0f4c85]
    `;
