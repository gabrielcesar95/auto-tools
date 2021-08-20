import React from 'react';
import HeaderStyles from './HeaderStyles';
import HomeLink from './HomeLink';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired
};

type AppHeaderTypes = InferProps<typeof propTypes>;

const AppHeader: React.FC<AppHeaderTypes> = ({ title }: AppHeaderTypes) => {
    return (
        <HeaderStyles>
            <div>
                <HomeLink />
                <h1>{title}</h1>
            </div>
        </HeaderStyles>
    );
};

AppHeader.propTypes = propTypes;

export default AppHeader;
