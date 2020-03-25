import React from 'react';
import { CellsStyle } from '../styles/CellsStyle'
import { figures } from '../../constants/figures';

export const Cells = ({type}) => (
    
    <CellsStyle color={figures[type].color} type={type}>
        {console.log(type)}
    </CellsStyle>
)