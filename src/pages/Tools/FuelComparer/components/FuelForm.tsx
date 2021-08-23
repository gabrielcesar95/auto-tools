import React, { useState } from 'react';
import { ButtonsDiv, FuelArticle, InputDiv } from '../styles';
import PropTypes, { InferProps } from 'prop-types';
import FuelType from '../../../../models/FuelType';

const propTypes = {
    fuelType: PropTypes.instanceOf(FuelType).isRequired
};

type FuelFormTypes = InferProps<typeof propTypes>;

const FuelForm: React.FC<FuelFormTypes> = ({ fuelType }: FuelFormTypes) => {
    const price_id = `fuel_price[${fuelType.id}]`;
    const consumption_id = `fuel_consumption[${fuelType.id}]`;

    const [price, setPrice] = useState<number>();
    const [consumption, setConsumption] = useState<number>();

    return (
        <FuelArticle>
            <h1>{fuelType.title}</h1>
            <InputDiv>
                <label htmlFor={price_id}>Preço</label>
                {/* TODO: Adicionar máscara no formato R$ 10,00  */}
                <input
                    type="number"
                    name={price_id}
                    id={price_id}
                    step=".01"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
            </InputDiv>
            <InputDiv>
                <label htmlFor={consumption_id}>Consumo</label>
                {/* TODO: Adicionar máscara no formato 8,45 Km/L */}
                <input
                    type="number"
                    name={consumption_id}
                    id={consumption_id}
                    step=".1"
                    min="0"
                    value={consumption}
                    onChange={(e) => setConsumption(Number(e.target.value))}
                />
            </InputDiv>
            <ButtonsDiv>
                <button>Adicionar</button>
            </ButtonsDiv>
        </FuelArticle>
    );
};

FuelForm.propTypes = propTypes;

export default FuelForm;
