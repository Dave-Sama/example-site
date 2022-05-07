import styledComponents from 'styled-components';
import tw from 'twin.macro';

export const NavbarContainer = tw.ul`
    list-style-type[none]
    overflow-hidden
    float-left
    my-auto
`;
export const Item = styledComponents.li`
    color: ${(prop) => {
			// console.log(prop.width);
			if (prop.width >= 1130) {
				return '#0f4c85';
			} else {
				return '#ffffff';
			}
		}};
    width: ${(prop) => (prop.width < 1130 ? '100%' : 'fit-content')};
    font-size: ${(props) => {
			if (props.width <= 1664) {
				return 1;
			} else {
				return 1.2;
			}
		}}rem;
    ${tw`
    // font-size[2vh]    
    float-left
    cursor-pointer
    block
    // w-full
    // lg:width[fit-content]
    lg:text-center
    font-family['Open Sans', sans-serif]
    padding[14px 16px]
    text-decoration[none]
    `}

`;
