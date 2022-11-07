import React from 'react';
import { Avatar, Button, Paper, TextField, Typography } from '@mui/material';

import styles from './Registration.module.scss';

export const Registration = () => {
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Створення аккаунту
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={styles.field} label="Повне ім'я" fullWidth />
      <TextField className={styles.field} label="E-Mail" fullWidth />
      <TextField className={styles.field} label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Увійти
      </Button>
    </Paper>
  );
};
