import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export const StandingUpOrgan = ({ data, heading, subHeading }: any) => {
  return (
    <Box sx={{ backgroundColor: '#FFF', position: 'relative' }}>
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={11} sm={10} md={8} lg={6}>
          <Typography
            variant="h2"
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
              pb: 5,
            }}
          >
            {heading}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'primary.light',
              textAlign: 'center',
              pb: 5,
              lineHeight: '28px',
            }}
          >
            {subHeading}
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ pt: 8, mb: 5, minHeight: '300px' }}>
        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid item xl={8} lg={10} md={10}>
            <Grid container sx={{ justifyContent: 'center' }}>
              {data?.map(({ title, subTitle, image }: any, index: any) => (
                <Grid item lg={4} sm={6} xs={12} key={index}>
                  <Card
                    sx={{
                      textAlign: 'center',
                      backgroundColor: 'transparent',
                      boxShadow: 'none',
                      transition: 'all 0.4s ease-in',
                      borderRadius: 0,
                      borderRight:
                        title !== 'Proof of Address' ? '1px solid #E4E4E7' : '',
                      padding: '40px 20px',
                      '&:nth-of-type(0n+3)': {
                        borderRight: 'none',
                      },
                      '&:hover': {
                        borderLeft: '1px solid #E4E4E7',
                        backgroundColor: '#F6FBFF',
                        transform: { md: 'scale(1.1)', sm: 'none' },
                      },
                    }}
                  >
                    <Image src={image} alt="Image" />
                    <Typography
                      variant="h3"
                      gutterBottom
                      sx={{
                        lineHeight: '28px',
                        color: 'primary.dark',
                        py: 1,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="h4"
                      color="primary.light"
                      sx={{
                        lineHeight: '26px',
                      }}
                    >
                      {subTitle}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
