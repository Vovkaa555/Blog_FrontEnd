import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import { Container } from '@mui/material';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>BLOG</div>
          </a>
          <div className={styles.buttons}>
            <Button variant="outlined">Увійти</Button>
            <Button variant="contained">Створити аккаунт</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
