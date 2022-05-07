import tw from 'twin.macro';

export const MoreInfoContainer = tw.div`
lg:width[80%]
width[100%]
mx-auto
//background-color[#00305b]
// bg-blue-200
// lg:h-28
height[fit-content] 
flex
flex-col
lg:flex-row

`;

export const LeftSector = tw.div`
    lg:w-1/2
    w-full
    // bg-red-200
    h-full
`;
export const RightSector = tw.div`
    lg:w-1/2
    w-full
    flex
`;
export const Heading = tw.h1`
    my-5
    lg:mt-5
    lg:mb-0
    // bg-red-100
    text-center
    lg:text-align[left]
    block
    text-4xl
    2xl:text-4xl
    lg:text-3xl
    font-family['Open Sans', sans-serif]
    
    color[#00305B]
    `;
export const Description = tw.p`
    lg:w-full
    // bg-blue-200
    block
    width[95%]
    mx-auto
    lg:mx-0
    lg:text-align[left]
    my-5
    lg:my-0
    text-center
    text-2xl
    color[#00305B]

`;
export const Button = tw.button`
    h-12
    2xl:width[33%]
    lg:width[60%]
    width[90%]
    m-auto   
    my-10
    lg:my-0      
    lg:mt-0 
    lg:mb-0 
    text-2xl
    text-white
    lg:m-auto
    background-color[#0f4c85]

`;
