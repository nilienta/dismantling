import React from 'react';
import { Box, Button } from '@mui/material';

import styles from './block-row.module.scss';

export const BlockRow = ({
  caption,
  title,
  name,
  needBtn,
  textBtn,
  onClick,
  children,
  ...rest
}) => {
  return (
    <section className={styles.row} id={name}>
      <h2 className={styles.row__caption}>/{caption}</h2>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1em',
          mb: '2em',
          justifyContent: 'space-between',
        }}
      >
        <h3 className={styles.row__title}>{title}</h3>
        {needBtn && (
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={onClick}
            {...rest}
            sx={{ textAlign: 'center' }}
          >
            {textBtn}
          </Button>
        )}
      </Box>
      {children}
    </section>
  );
};
