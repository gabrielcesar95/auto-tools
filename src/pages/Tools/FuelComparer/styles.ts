import styled from 'styled-components';
import tw from 'twin.macro';

export const InputSection = styled.section`
    /* TODO: "sm:space-y-4" não tá rolando. Talvez fazer com grid? */
    ${tw`container mx-auto py-4 flex flex-col md:flex-row md:space-y-0 md:space-x-4`}
`;

export const FuelArticle = styled.article`
    ${tw`w-full md:w-1/3 lg:w-1/4 p-6 flex flex-col bg-blue-600 text-white space-y-2 rounded-md`}

    & {
        h1 {
            ${tw`font-bold text-xl`}
        }
    }
`;

export const InputDiv = styled.div`
    ${tw`flex flex-row items-center`}

    & {
        label {
            ${tw`flex-grow`}
        }

        input {
            ${tw`w-24 h-8 rounded-md text-black text-right`}
        }
    }
`;

export const ButtonsDiv = styled.div`
    ${tw`flex flex-row justify-end mt-2`}

    & {
        button {
            ${tw`bg-gray-500 p-1 rounded-md`}
        }
    }
`;
