import React from 'react';
import { Link } from 'react-router-dom';
import GridStyles from './styles';

const Grid: React.FC = () => {
    return (
        <GridStyles>
            <div>
                <Link to="/fuel-comparer">
                    <article>
                        <img src="/assets/img/fuel_icon.png" alt="Comparador de rendimento de combustíveis" />
                        Comparador de rendimento de combustíveis
                    </article>
                </Link>
            </div>
        </GridStyles>
    );
};

export default Grid;
