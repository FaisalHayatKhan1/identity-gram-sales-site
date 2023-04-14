import React from 'react';
import { Grid, Typography } from '@mui/material';

export const HerotextAtom = (prop: any) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container item>
          <Typography
            variant="h6"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: '20px',
            }}
          >
            {prop.title}
          </Typography>

          <Grid item>
            <Typography
              sx={{
                fontSize: '60px',
                color: '#2E285C',
                lineHeight: '76px',
                fontWeight: 500,
                letterSpacing: '-0.04em',
                py: 3,
              }}
            >
              {prop.mainTitle}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                fontSize: '18px',
                color: 'primary.main',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                lineHeight: '32px',
              }}
            >
              {prop.text}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
