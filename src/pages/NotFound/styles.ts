import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const NotFoundStyles = styled.main`
    ${tw`flex flex-col items-center justify-center h-screen filter bg-center bg-cover bg-no-repeat`}
    background-image: url('assets/img/404_background.jpg');
`;

export const ContentWrapper = styled.section`
    ${tw`bg-white p-8 filter filter-none`}
    & {
        h1 {
            ${tw`text-3xl`}
        }
        p {
            ${tw`text-xl py-2`}
        }
    }
`;

export const StyledLink = styled(Link)`
    ${tw`text-blue-700 font-bold text-right block`}
`;

export default NotFoundStyles;
