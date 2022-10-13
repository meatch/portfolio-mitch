import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { marvelData } from './marvelData.js';

/* Components ---------------------------*/
import SuperHero from './SuperHero.jsx';

const Marvel = () => {
    return (
        <MarvelStyled className='Marvel'>
            <h1>Marvel</h1>

            <p>
                Amazing Marvel Character Headshots by <a href="https://www.craigrousseau.com/" target="Craig Rousseau">Craig Rousseau</a>.
                <a href='https://i.redd.it/2swwyk905lq41.jpg' target='Original Marvel Illustrations'>See Original Image</a>.
                I leverage these only for testing things out, never for commercial use.
            </p>

            <div className="row">
                {
                    marvelData.map((h,i) => {
                        return <SuperHero key={i} hero={h} />
                    })
                }
            </div>

        </MarvelStyled>
    );
}

export default Marvel;

const MarvelStyled = styled.div`

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;