import React, { useState } from 'react';
import AppHeader from '../../../components/Header';
import AppStyles from '../../../components/styles';
import FuelType from '../../../models/FuelType';
import FuelInputBlock, { ConsumptionData } from './components/FuelInputBlock';
import Results from './components/Results';
import { ButtonsDiv, InputSection } from './styles';

interface ExpenseEstimate {
    fuelType: FuelType;
    pricePerKm: number;
}
interface Results {
    recommendedFuelType: FuelType;
    expenseEstimates: ExpenseEstimate[];
}

const FuelComparer: React.FC = () => {
    // TODO: pegar fueltypes do firebase
    const fuelTypes = [new FuelType('gasoline', 'Gasolina'), new FuelType('ethanol', 'Etanol')];

    const [comparisonData, setComparisonData] = useState({});

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <AppStyles>
            <AppHeader title="Comparador de Rendimento" />

            <main>
                <form onSubmit={handleSubmit}>
                    <InputSection>
                        {fuelTypes.map((fuelType) => {
                            const [formBlockData, setFormBlockData] = useState<ConsumptionData>(
                                new ConsumptionData(0, 0)
                            );

                            return (
                                <FuelInputBlock
                                    fuelType={fuelType}
                                    key={fuelType.id}
                                    data={formBlockData}
                                    setData={setFormBlockData}
                                />
                            );
                        })}
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
