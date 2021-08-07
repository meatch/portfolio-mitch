import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/store.js';

/* Scripts ---------------------------*/
import { useMediaQuery } from '../../common/responsive.js';

/* Components ---------------------------*/
import Item from './Item.jsx';

const Items = () => {

    const queries = useMediaQuery();

    const { state } = useContext(Context);

    return (
        <ItemsStyled className='Items' queries={ queries }>
            {
                state.items.map((item) => {
                    return <Item key={ item.id } item={ item } />;
                })
            }
        </ItemsStyled>
    );
}

export default Items;

const ItemsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 48%); grid-gap: 3px;

    ${ ({queries}) => {
        if (queries.isMedium) {
            return css` grid-template-columns: repeat(auto-fill, 32%); grid-gap: 5px;`;
        }
        if (queries.isLarge) {
            return css` grid-template-columns: repeat(auto-fill, 24%); grid-gap: 10px;`;
        }
    }}




`;