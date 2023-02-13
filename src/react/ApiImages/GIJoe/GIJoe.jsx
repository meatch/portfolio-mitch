import React from 'react';
import styled from 'styled-components';

/* Scripts ---------------------------*/
import { giJoeData } from './giJoeData.js';

/* Components ---------------------------*/
import SuperHeroList from '../Common/SuperHeroList';

const GIJoe = () => {
    return (
        <GIJoeStyled className='GIJoe'>
            <SuperHeroList title='GI Joe' heroes={ giJoeData }>
                <p>
                    Amazing GI Joe Character Headshots by <a href="http://www.actionfigureinsider.com/hasbro-g-i-joe-fan-first-friday-unveils-new-action-figures-and-more-gijoe/" target="Action Figure Insider">Action Figure Insider</a>.
                    <a href='https://i0.wp.com/www.actionfigureinsider.com/wpress/wp-content/uploads/2020/06/HasbroFBGIJOEBanner.jpg?fit=1640%2C720' target='Original GIJoe Illustrations'>See Original Image</a>.
                    I leverage these only for testing things out, never for commercial use.
                </p>
            </SuperHeroList>
        </GIJoeStyled>
    );
}

export default GIJoe;

const GIJoeStyled = styled.div`
`;