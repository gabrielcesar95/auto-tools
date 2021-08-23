import React from 'react';
import AppHeader from '../../../components/Header';
import AppStyles from '../../../components/styles';
import FuelType from '../../../models/FuelType';
import FuelForm from './components/FuelForm';
import { InputSection } from './styles';

const FuelComparer: React.FC = () => {
    // TODO: pegar fueltypes do firebase
    const fuelTypes = [new FuelType('gasoline', 'Gasolina'), new FuelType('ethanol', 'Etanol')];

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert('Enviando form');
    };

    return (
        <AppStyles>
            <AppHeader title="Comparador de Rendimento" />

            <main>
                <form onSubmit={handleSubmit}>
                    <InputSection>
                        {fuelTypes.map((fuelType) => (
                            <FuelForm fuelType={fuelType} key={fuelType.id} />
                        ))}
                    </InputSection>
                </form>
            </main>
        </AppStyles>
    );
};

export default FuelComparer;
