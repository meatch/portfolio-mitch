import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from "react-router-dom";

/* Components ---------------------------*/
import Marvel from './Marvel/Marvel';
import GIJoe from './GIJoe/GIJoe.jsx';

const ApiImages = () => {
    return (
        <ApiImagesStyled className='ApiImages'>
            <h1>Api Images</h1>
            <nav className="sublinks">
                <Link to="/api-images">Marvel</Link>
                <Link to="/api-images/gijoe">GI Joe</Link>
            </nav>
            <Switch>
                <Route path='/api-images' exact component={ Marvel } />
                <Route path='/api-images/gijoe' component={ GIJoe } />
            </Switch>
        </ApiImagesStyled>
    );
}

export default ApiImages;

const ApiImagesStyled = styled.div`

`;