// Apis:
import tw from 'twin.macro';
import { Element } from 'react-scroll';

export const WhatMakesUsDifferentContainer = tw(Element)`
    
    height[75vh]
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
    text-6xl
`;
export const Description = tw.p`
    block
    color[#00305B]
    w-2/3
    mx-auto
    text-2xl
    font-weight[300]
    height[38%]
`;
