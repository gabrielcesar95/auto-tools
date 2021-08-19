import styled from "styled-components";
import tw from "twin.macro";

const HeaderStyles = styled.header`
    ${tw`w-full p-2 bg-blue-600`}

    & {
        >div{
            ${tw`container flex flex-row mx-auto items-center`}
            img{
                ${tw`object-contain w-24 md:w-32`}
            }
            h1{
                ${tw`mx-2 text-2xl text-white`}
            }
        }
    }

`;

export default HeaderStyles;