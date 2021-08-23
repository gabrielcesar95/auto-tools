import React from 'react';
import { ResultsSection } from '../styles';

export const Results: React.FC = () => {
    return (
        <ResultsSection>
            <h1>
                Combustível recomendado: <strong>Etanol</strong>
            </h1>

            <h2>Estimativas de gastos:</h2>
            <article>
                <h1>Gasolina</h1>
                <div>
                    <p>
                        Preço por Km: <strong>R$ 1,48</strong>
                    </p>
                </div>
            </article>
            <article>
                <h1>Etanol</h1>
                <div>
                    <p>
                        Preço por Km: <strong>R$ 1,78</strong>
                    </p>
                </div>
            </article>
        </ResultsSection>
    );
};

export default Results;
