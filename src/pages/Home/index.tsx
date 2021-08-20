import React from 'react';
import AppHeader from '../../components/Header';
import AppStyles from '../../components/AppStyles';
import Grid from './components/Grid';

const Home: React.FC = () => {
    return (
        <AppStyles>
            <AppHeader title="Ferramentas" />

            <main>
                <Grid />
            </main>
        </AppStyles>
    );
};

export default Home;
