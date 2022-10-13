import React from 'react';
import styled from 'styled-components';

const SuperHero = ({hero}) => {
    return (
        <SuperHeroStyled className='SuperHero'>
            <a href={ `/assets/img/marvel/${hero}` }>
                <img src={ `/assets/img/marvel/${hero}` } />
            </a>
        </SuperHeroStyled>
    );
}

export default SuperHero;

const SuperHeroStyled = styled.div`
    border: solid 5px teal;
    padding: 20px;
    width: 170px;
    margin-bottom: 10px;

    img {
        max-width: 100%;
    }
`;