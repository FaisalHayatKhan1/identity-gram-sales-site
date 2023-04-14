import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
//import { curiveLine, ezgif, identityHeroImage, PatternHeroImage, ShieldDone } from '@images';

export const WhyIdentity = ({
  heading1 = 'Why',
  bigHeading1 = 'Identity Gram',
  paragraph = 'Convert and onboard more real customers while stopping bad actors with Identity Gram verification solution. We offer the fastest and easiest way to convert more users, prevent fraud, and comply with regulations.',
}: // image = ezgif,
any) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        p: { xs: 0, md: 2 },
        mt: '100px',
        height: '980px',
      }}
    >
      <Grid
        container
        sx={{
          // justifyContent: 'space-between',
          px: { xs: 2, lg: 3 },
          py: { xs: 6, lg: 12 },
          borderRadius: { xs: 0, md: '48px' },
          // backgroundColor: '#f9f5ff',
          //alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={6.5}
          xl={5}
          sx={{
            px: { xs: 1, sm: 3, lg: 5, xl: 9 },
            py: { xs: 1, sm: 3, lg: 5, xl: 10 },
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 0, lg: '60px' },
                top: { xs: 0, lg: '-210px' },
              }}
            >
              {/* <Image src={curiveLine} alt="" /> */}
            </Box>
            {/* <Box
              sx={{
                height: '12px',
                width: '12px',
                backgroundColor: '#583FBC',
                borderRadius: '50px',
                position: 'absolute',
                right: { lg: '10px', md: '10px', xs: '40px' },
                bottom: { lg: '50px', md: '30px', xs: '80px' },
              }}
            ></Box> */}
            <Grid container>
              <Grid item xs={12}>
                {/* <Grid container item > */}

                <Grid item sx={{ justifyContent: 'end' }}>
                  <Box sx={{ pl: '200px' }}>
                    <Typography
                      sx={{
                        fontSize: '60px',
                        color: '#2E285C',
                        lineHeight: '76px',
                        fontWeight: 500,
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {heading1}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '60px',
                        color: '#2E285C',
                        lineHeight: '76px',
                        fontWeight: 500,
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {bigHeading1}
                    </Typography>
                  </Box>
                </Grid>
                {/* </Grid> */}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5.4}
          xl={7}
          //  sx={{ textAlign: 'center', margin: 'auto' }}
        >
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                left: { lg: '400px', md: '140px', xs: '150px' },
                top: { lg: '-120px', md: '-10px', xs: '25px' },
              }}
            >
              {/* // <Image src={ShieldDone} alt="" /> */}
            </Box>
            <Box
              sx={{
                height: '12px',
                width: '12px',
                backgroundColor: '#583FBC',
                borderRadius: '50px',
                position: 'absolute',
                right: { lg: '200px', md: '140px', xs: '150px' },
                top: { lg: '-100px', md: '-10px', xs: '25px' },
              }}
            ></Box>
          </Box>
          {/* <Image
            src={image}
            alt=""
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
};
