import styled from 'styled-components';
import tw from 'twin.macro';

export const GridStyles = styled.section`
    ${tw`container mx-auto py-4`}

    & {
        > div {
            ${tw`m-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4`}
        }
        article {
            ${tw`flex flex-col items-center justify-center text-center text-sm bg-gray-400 hover:bg-gray-300 rounded`}
            img {
                ${tw`w-24`}
            }
        }
    }
`;

export default GridStyles;
