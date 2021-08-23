import React, { useState } from 'react';
import AppHeader from '../../../components/Header';
import AppStyles from '../../../components/styles';
import FuelType from '../../../models/FuelType';
import FuelInputBlock from './components/FuelInputBlock';
import Results from './components/Results';
import { ButtonsDiv, InputSection } from './styles';

const FuelComparer: React.FC = () => {
    // TODO: pegar fueltypes do firebase
    const fuelTypes = [new FuelType('gasoline', 'Gasolina'), new FuelType('ethanol', 'Etanol')];

    interface ExpenseEstimate {
        fuelType: FuelType;
        pricePerKm: number;
    }
    interface Results {
        recommendedFuelType: FuelType;
        expenseEstimates: ExpenseEstimate[];
    }

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    // const compare = () => {};

    return (
        <AppStyles>
            <AppHeader title="Comparador de Rendimento" />

            <main>
                <form onSubmit={handleSubmit}>
                    <InputSection>
                        {fuelTypes.map((fuelType) => (
                            <FuelInputBlock fuelType={fuelType} key={fuelType.id} />
                        ))}
                    </InputSection>
                    <ButtonsDiv>
                        <button type="submit">Comparar</button>
                    </ButtonsDiv>
                </form>
                <Results />
            </main>
        </AppStyles>
    );
};

export default FuelComparer;
