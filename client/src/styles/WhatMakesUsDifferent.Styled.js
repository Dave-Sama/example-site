// Apis:
import tw from 'twin.macro';
import { Element } from 'react-scroll';

export const WhatMakesUsDifferentContainer = tw(Element)`
    
    lg:height[fit-fit-content]
    background-color[#EAF4F6]
    flex
    flex-col
    font-family['Open Sans', sans-serif]

`;
export const Heading = tw.h1`
    block
    mt-20
    mb-10
    text-center
    
    font-weight[400]
    color[#00305B]
    2xl:text-6xl
    xl:font-size[7vh]
    md:font-size[6vh]
    sm:font-size[5vh]
    font-size[4vh]
`;
export const Description = tw.p`
    block
    color[#00305B]
    lg:w-2/3
    width[85%]
    mx-auto
    text-justify
    
    font-weight[300]
    height[38%]

    // 2xl:text-6xl
    // xl:font-size[7vh]
    md:font-size[3vh]
    sm:font-size[3vh]
    font-size[2vh]
`;

export const Img = tw.img`
    lg:w-48 
    w-32
    my-4 
    mx-auto 
    mb-10
    
`;
