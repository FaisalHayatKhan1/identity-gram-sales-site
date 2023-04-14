import React from 'react';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export const CustomButtonAtom = (prop: any) => {
  return (
    <>
      <Grid container>
        <Box sx={{ py: '30px' }}>
          <Button
            variant="contained"
            sx={{
              width: '175px',
              height: '54px',
              backgroundColor: '#645CAA',
              borderRadius: '5px',
              boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.043);',
              fontSize: '16px',
              fontWeight: 500,
              color: 'common.white',
            }}
          >
            {prop.children}
          </Button>
        </Box>
      </Grid>
    </>
  );
};
