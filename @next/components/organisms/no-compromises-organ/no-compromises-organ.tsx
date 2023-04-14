import React from 'react';
import { compromisesImage } from '@images';
import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';

export const NocompromisesOrgan = ({
  width = '100%',
  image = { compromisesImage },
  title = 'No compromises',
  subTitle = 'Prevent fraud, build trust, and onboard more customers faster with Identity gram’s identity verification solution.',
  left,
  top,
}: any) => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        mt: { lg: '80px', md: '80px', sm: '60px', xs: '40px' },
      }}
    >
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Box
            sx={{ position: 'relative', px: { lg: 6, md: 6, sm: 4, xs: 2 } }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: '2.25rem',
                  md: '2.25rem',
                  sm: '2rem',
                  xs: '1.5rem',
                },
                color: 'primary.dark',
                textAlign: 'center',
                lineHeight: { lg: '46px', md: '46px', sm: '46px', xs: '30px' },
                fontWeight: 400,
              }}
            >
              {title}
            </Typography>
            <Box sx={{ display: { sm: 'inline', xs: 'none' } }}>
              <Image
                src={image}
                alt=""
                style={{
                  width: width,
                  position: 'absolute',
                  left: left,
                  top: top,
                }}
              />
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: 'primary.light',
                textAlign: 'center',
                py: 4,
                lineHeight: '32px',
              }}
            >
              {subTitle}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
