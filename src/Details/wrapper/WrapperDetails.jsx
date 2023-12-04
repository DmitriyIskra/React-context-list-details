import React from 'react';

import styles from './css/style.module.css';

import Avatar from '../avatar/Avatar';
import Name from '../name/Name';
import ListDetails from '../list-details/ListDetails';

export default function WrapperDetails() {
  return (
    <div className={styles.wrapper}>
      <Avatar />
      <Name />
      <ListDetails />
    </div>
  )
}
