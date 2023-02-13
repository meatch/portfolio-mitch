import React from 'react';
import styled from 'styled-components';

import SuperHero from './SuperHero';

const SuperHeroList = ({ title = 'Marvel', children, heroes }) => {
    return (
        <SuperHeroListStyled className="SuperHeroList">
            <h2>{title}</h2>
            {children}
            <div className="row">
                {heroes.map((hero, idx) => {
                    return <SuperHero key={idx} hero={hero} />;
                })}
            </div>
        </SuperHeroListStyled>
    );
};

export default SuperHeroList;

const SuperHeroListStyled = styled.div`
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;
