import React from 'react';
import { useContext } from 'react';

import styles from './css/style.module.css';

import { DetailsContext } from '../../context/DetailsContext';

export default function Name() {
  const { name } = useContext(DetailsContext);

  return (
    <div className={styles.name}>{name}</div>
  )
}
