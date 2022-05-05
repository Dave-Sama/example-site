import tw from 'twin.macro';

export const MoreInfoContainer = tw.div`
width[80%]
mx-auto
//background-color[#00305b]
bg-white
h-28
flex

`;

export const LeftSector = tw.div`
    w-1/2
    h-full
`;
export const RightSector = tw.div`
    w-1/2
    flex
`;
export const Heading = tw.h1`
    mt-5
    
    
    block
    text-4xl
    font-family['Open Sans', sans-serif]

    color[#00305B]
    `;
export const Description = tw.p`
    w-full
    text-2xl
    color[#00305B]

`;
export const Button = tw.button`
    h-12
    width[33%]
    my-auto    
    text-2xl
    text-white
    background-color[#0f4c85]

`;
