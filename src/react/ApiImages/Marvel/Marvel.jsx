import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { marvelData } from './marvelData.js';

/* Components ---------------------------*/
import SuperHeroList from '../Common/SuperHeroList';

const Marvel = () => {
    return (
        <MarvelStyled className='Marvel'>

            <SuperHeroList title='Marvel' heroes={ marvelData }>
                <p>
                    Amazing Marvel Character Headshots by <a href="https://www.craigrousseau.com/" target="Craig Rousseau">Craig Rousseau</a>.
                    <a href='https://i.redd.it/2swwyk905lq41.jpg' target='Original Marvel Illustrations'>See Original Image</a>.
                    I leverage these only for testing things out, never for commercial use.
                </p>
            </SuperHeroList>
        </MarvelStyled>
    );
}

export default Marvel;

const MarvelStyled = styled.div``;