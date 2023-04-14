import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import { heroGuardImage, PatternHeroImage } from '@images';
import { CustomLink } from '@atoms';

export const HeroSectionorgan = ({
  heading1 = '',
  bigHeading1 = '',
  paragraph = '',
  image,
}: any) => {
  return (
    <Box sx={{ backgroundColor: '#fff', p: { xs: 0, md: 2 }, mt: '100px' }}>
      <Grid
        container
        sx={{
          justifyContent: 'space-between',
          px: { xs: 2, lg: 3 },
          py: { xs: 6, lg: 12 },
          borderRadius: { xs: 0, md: '48px' },
          backgroundColor: '#f9f5ff',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={6.5}
          xl={6.5}
          sx={{
            px: { xs: 1, sm: 3, lg: 5, xl: 9 },
            py: { xs: 1, sm: 3, lg: 5, xl: 10 },
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                right: { xs: 0, lg: '-30px' },
                top: { xs: 0, lg: '-110px' },
                display: { md: 'block', xs: 'none' },
              }}
            >
              <Image src={PatternHeroImage} alt="" />
            </Box>
            <Box
              sx={{
                height: '12px',
                width: '12px',
                backgroundColor: '#583FBC',
                borderRadius: '50px',
                position: 'absolute',
                right: { lg: '10px', md: '10px', xs: '40px' },
                bottom: { lg: '50px', md: '30px', sm: '180px', xs: '320px' },
              }}
            ></Box>
            <Grid container>
              <Grid item xs={12}>
                <Grid container item>
                  <Typography
                    sx={{
                      fontSize: {
                        sm: '1rem',
                        xs: '.75rem',
                      },
                      color: 'primary.main',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      lineHeight: {
                        md: '20px',
                        xs: '10px',
                      },
                      fontWeight: 700,
                    }}
                  >
                    {heading1}
                  </Typography>

                  <Grid item xs={12}>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: '3.75rem',
                          sm: '2.75rem',
                          xs: '1.75rem',
                        },
                        color: 'primary.dark',
                        fontWeight: 500,
                        lineHeight: {
                          lg: '76px',
                          md: '55px',
                          sm: '50px',
                          xs: '40px',
                        },
                        letterSpacing: '-0.04em',
                        py: 3,
                      }}
                    >
                      {bigHeading1}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'primary.main',
                        letterSpacing: '-0.02em',
                        lineHeight: '32px',
                      }}
                    >
                      {paragraph}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box sx={{ mt: '40px' }}>
              <CustomLink
                title="Join with Us"
                link="https://app-dev.identitygram.co.uk/auth/signup"
              />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                right: { xs: 0, lg: '130px' },
                bottom: { xs: '-60px', lg: '-110px' },
              }}
            >
              <Image src={heroGuardImage} alt="" />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5.4}
          xl={5.4}
          sx={{ textAlign: 'center', margin: 'auto' }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                height: '12px',
                width: '12px',
                backgroundColor: '#583FBC',
                borderRadius: '50px',
                position: 'absolute',
                right: { lg: '200px', md: '140px', xs: '150px' },
                top: { lg: '-60px', md: '-10px', xs: '25px' },
              }}
            ></Box>
          </Box>
          <Image
            src={image}
            alt=""
            style={{ objectFit: 'contain', width: '100%' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
