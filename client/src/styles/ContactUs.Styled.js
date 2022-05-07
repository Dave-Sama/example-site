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
        lg:height[90vh]
        height[130vh]
        flex
        flex-col
        lg:flex-row
    `}
`;

export const LeftSector = tw.div`
    background-color[rgba(0, 49, 91,0.5)]
    lg:w-1/3
    height[14%]
    lg:h-full
    w-full
    flex
    flex-col
`
export const RightSector = tw.div`
    width[90%]
    // bg-red-200
    mx-auto
    lg:mx-0
    lg:w-2/3
`;

export const Heading = tw.h1`
   text-white
   lg:width[55%]
    
   width[100%]
   
   text-center
   lg:text-6xl
   text-2xl
   mx-auto
   lg:mt-28
   mt-8
`;
export const RightHeading = tw.h1`
   text-white
   width[98%]
   lg:width[90%]
   2xl:width[45%]
//    bg-red-200
    
   lg:text-2xl
   text-xl
   lg:ml-20
   lg:mt-28
   my-6
   mx-auto
`;
export const Text = styledComponents.p`
    margin-left: ${(props) => {
			if (props.margin < 600) {
				return 0.5;
			} else if (props.margin > 1020) {
				return 5;
			}
		}}rem;
${tw`
    text-white
    lg:width[55%]
    width[90%]
    text-xl
    
`}
   
`;

export const Spacing = styledComponents.div`
    
    // height: ${(props) => props.space}rem;
   ${tw`
    block
    w-full
    height[1rem]
    lg:height[2rem]
   `}
`;

export const Img = tw.img`
    lg:width[200px]
    width[40px]
    lg:height[200px]
    mx-auto
    lg:mt-5
    mb-6
    mt-4
`;

export const FormContainer = tw.div`
    flex
    flex-col
    lg:flex-row
    lg:ml-20
    // bg-red-200
    lg:width[90%]
    2xl:width[55%]
    width[100%]
    height[13rem]
    `;
export const LeftFrom = tw.div`
    mx-auto
    
    width[90%]
    lg:w-1/2
    `;
export const RightFrom = tw.div`
    mx-auto
    width[90%]
    lg:w-1/2
`;
export const Input = tw.input`
mt-1
p-1
mx-auto
lg:width[95%]
width[100%]
hover:bg-blue-300
    transition-all
`;
export const TextArea = tw.textarea`
    mt-1
    p-1
    mx-auto
    
    lg:width[95%]
    width[100%]
    hover:bg-blue-300
    transition-all
    height[77%]
    `;

export const Button = tw.button`
        lg:ml-20
        ml-4
        lg:mt-5
        mt-48
        lg:width[87%]
        2xl:width[55%]
        width[90%]
        height[5%]
        border-2
        text-white
        background-color[#0f4c85]
    `;
