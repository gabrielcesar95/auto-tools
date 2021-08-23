import React, { useState } from 'react';
import { FuelArticle, InputDiv } from '../styles';
import PropTypes, { InferProps } from 'prop-types';
import FuelType from '../../../../models/FuelType';

const propTypes = {
    fuelType: PropTypes.instanceOf(FuelType).isRequired
};

type FuelInputBlockPropTypes = InferProps<typeof propTypes>;

const FuelInputBlock: React.FC<FuelInputBlockPropTypes> = ({ fuelType }: FuelInputBlockPropTypes) => {
    const input_price_id = `fuel_price[${fuelType.id}]`;
    const input_consumption_id = `fuel_consumption[${fuelType.id}]`;

    const [price, setPrice] = useState<number>();
    const [consumption, setConsumption] = useState<number>();

    return (
        <FuelArticle>
            <h1>{fuelType.title}</h1>
            <InputDiv>
                <label htmlFor={input_price_id}>Preço</label>
                {/* TODO: Adicionar máscara no formato R$ 10,00  */}
                <input
                    type="number"
                    name={input_price_id}
                    id={input_price_id}
                    step=".01"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />
            </InputDiv>
            <InputDiv>
                <label htmlFor={input_consumption_id}>Consumo</label>
                {/* TODO: Adicionar máscara no formato 8,45 Km/L */}
                <input
                    type="number"
                    name={input_consumption_id}
                    id={input_consumption_id}
                    step=".1"
                    min="0"
                    value={consumption}
                    onChange={(e) => setConsumption(Number(e.target.value))}
                />
            </InputDiv>
        </FuelArticle>
    );
};

FuelInputBlock.propTypes = propTypes;

export default FuelInputBlock;
