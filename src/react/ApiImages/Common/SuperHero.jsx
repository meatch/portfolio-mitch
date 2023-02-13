import React from 'react';
import styled from 'styled-components';

const SuperHero = ({hero}) => {

    const imagUrl = `/assets/img${hero}`;

    return (
        <SuperHeroStyled className='SuperHero'>
            <a href={ imagUrl }>
                <img src={ imagUrl } />
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