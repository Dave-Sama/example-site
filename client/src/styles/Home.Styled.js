// Apis:
import styledComponents from 'styled-components';
import tw from 'twin.macro';
import { Element } from 'react-scroll';

// Images:
import bg from '../images/bg.jpg';

export const HomeContainer = styledComponents(Element)`
    background-image: url(${bg}),
		linear-gradient(to right, rgba(133, 152, 166,1),rgba(1, 78, 133,0.5));

	background-blend-mode: overlay;
	background-repeat: no-repeat;
	background-size: cover;

    ${tw`
        flex
        flex-col
        lg:flex-row
        w-full
        h-screen
    `}
`;

export const LeftSector = tw.div`
  
    lg:h-screen
    background-color[rgba(0,48,91,0.8)]
    w-full
    lg:w-1/3
    flex
`;

export const LogoImageContainer = tw.div`
    m-auto
    font-family['Open Sans', sans-serif]

`;
export const ButtonRequest = tw.button`
    mx-auto
    block
    background-color[#0F4c85]
    border-2
    font-size[17px]
    font-family['Open Sans', sans-serif]
    text-white
    my-12    
    
    width[150px]
    height[40px]
`;

export const RightSector = tw.div`
    w-2/3
`;
