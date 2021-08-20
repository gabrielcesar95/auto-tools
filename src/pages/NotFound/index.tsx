import React from 'react';
import { Helmet } from 'react-helmet';
import AppStyles from '../../components/styles';
import NotFoundStyles, { ContentWrapper, StyledLink } from './styles';

const NotFound: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Página não encontrada</title>
            </Helmet>
            <AppStyles>
                <NotFoundStyles>
                    <ContentWrapper>
                        <h1>Erro 404</h1>
                        <p>Ué, não tem nada aqui não...</p>
                        <StyledLink to="/">Página Inicial</StyledLink>
                    </ContentWrapper>
                </NotFoundStyles>
            </AppStyles>
        </>
    );
};

export default NotFound;
