import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const VerificationWorkContent = ({
  heading = '',
  paragraph = '',
  image = '',
}: any) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography
          variant="h3"
          sx={{
            color: 'primary.dark',
            lineHeight: '40px',
            py: 3,
            px: 0,
          }}
        >
          {heading}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: 'primary.light',
            pb: 3,
            lineHeight: '28px',
          }}
        >
          {paragraph}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Box
          sx={{
            justifyContent: { md: 'end', sm: 'center' },
            display: 'flex',
          }}
        >
          <Image src={image} alt="" width={280} height={320} />
        </Box>
      </Grid>
    </Grid>
  );
};
