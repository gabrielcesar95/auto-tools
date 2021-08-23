import styled from 'styled-components';
import tw from 'twin.macro';

export const InputSection = styled.section`
    /* TODO: "sm:space-y-4" não tá rolando. Talvez fazer com grid? */
    ${tw`container mx-auto py-4 flex flex-col md:flex-row md:space-y-0 md:space-x-4`}
`;

export const ButtonsDiv = styled.div`
    ${tw`container mx-auto flex flex-row mb-2 justify-end`}

    & {
        > button {
            ${tw`bg-blue-600 h-8 px-2 rounded-md text-white`}
        }
    }
`;

export const FuelArticle = styled.article`
    ${tw`w-full md:w-1/3 lg:w-1/4 p-6 flex flex-col bg-blue-600 text-white space-y-2 rounded-md`}

    & {
        > h1 {
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

export const ResultsSection = styled.section`
    ${tw`container mx-auto p-6 flex flex-col bg-blue-600 text-white rounded-md`}

    & {
        > h1 {
            ${tw`text-3xl mb-3`}
        }
        > h2 {
            ${tw`text-xl mb-2`}
        }
        > article > h1 {
            ${tw`text-lg`}
        }
    }
`;
