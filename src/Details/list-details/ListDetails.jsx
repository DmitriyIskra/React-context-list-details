import React from 'react';
import { useContext } from 'react'; 

import { v4 } from 'uuid';

import Item from '../item/Item';

import { DetailsContext } from '../../context/DetailsContext';

export default function ListDetails() {
  const {details} = useContext(DetailsContext);
  const keys = Object.keys(details);
  
  return (
    <ul>
        {keys.map( key => <Item key={v4()} title={key} value={details.key}/> )}
    </ul>
  )
}
