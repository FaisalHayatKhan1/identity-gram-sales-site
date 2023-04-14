import React from 'react';
import { CustomLink } from '@atoms';
import { underConstruction } from '@images';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const UnderConstructionMol = () => {
  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        pt: 15,
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} lg={5}  sx={{ m: 'auto' }}>
          <Image
            src={underConstruction}
            alt="Under Construction"
            style={{ width: '100%', height: '100%' }}
          />
        </Grid>
      </Grid>
      <Typography variant="h2">We are Under Development.</Typography>
      <Typography variant="h4" sx={{ mb: 5, mt: 1 }}>
        Will be Back Soon!
      </Typography>
      <CustomLink title="Back To Home" link="/" />
    </Box>
  );
};
