import React from 'react';
import { CellsStyle } from '../styles/CellsStyle'
import { figure } from '../../constants/figure';

export const Cells = ({type}) => (
    
    <CellsStyle color={figure[type].color} type={type}>
        {console.log(type)}
    </CellsStyle>
)