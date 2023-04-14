import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import {
  approveProofTab,
  captureProofTab,
  extraionProofTab,
  validationProoftab,
} from '@images';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { VerificationWorkContent, VerificationWorkTab } from '@molecules';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const ProofAddressTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        py: { lg: '140px', md: '100px', sm: '60px', xs: '40px' },
        backgroundColor: '#FFF',
      }}
    >
      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          // variant="h2"
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
            mb: 5,
          }}
        >
          How Verification Works
        </Typography>
      </Grid>

      <Box sx={{ width: '100%', px: { xl: 10, lg: 8, md: 6, sm: 4, xs: 2 } }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: 'space-between',
                px: 3.5,
              },
              '& .MuiTabs-scroller': { overFlowX: 'auto !important' },
              '& .MuiTabs-indicator': { backgroungColor: 'transparent' },
              '& .css-2ag9pz-MuiTabs-indicator': {
                backgroundColor: 'transparent !important',
              },
              '& .MuiButtonBase-root': {
                maxWidth: '420px !important',
              },
            }}
          >
            <Tab
              label={
                <VerificationWorkTab
                  numberTab="1"
                  headingTab="Proof of Address capture > > >"
                />
              }
              {...a11yProps(0)}
              sx={{
                whiteSpace: 'nowrap',
                '& .css-2ag9pz-MuiTabs-indicator': {
                  maxWidth: '5000px !important',
                  backgroundColor: 'red !important',
                },
              }}
            />

            <Tab
              label={
                <VerificationWorkTab
                  numberTab="2"
                  headingTab="Automated extration  > > >"
                />
              }
              sx={{ whiteSpace: 'nowrap' }}
              {...a11yProps(1)}
            />
            <Tab
              label={
                <VerificationWorkTab
                  numberTab="3"
                  headingTab="Validation and fraud detection > > >"
                />
              }
              sx={{ whiteSpace: 'nowrap' }}
              {...a11yProps(2)}
            />

            <Tab
              label={
                <VerificationWorkTab
                  numberTab="4"
                  headingTab="Approve real customers > > >"
                />
              }
              sx={{ whiteSpace: 'nowrap' }}
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <Box sx={{ minHeight: '400px', py: '20px' }}>
          <TabPanel value={value} index={0}>
            <VerificationWorkContent
              heading="Proof of Address capture"
              paragraph="Easily and securely capture a copy of customers’ POA documents either as part of ID Verification or as a standalone process. Credit card statements, driver licenses, and utility or phone bills are examples of documents accepted as proof of address."
              image={captureProofTab}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <VerificationWorkContent
              heading="Automated extration"
              paragraph="Identity gram then scans the acceptable document and automatically reads and extracts key details like names, residential addresses, dates, and transaction information in seconds."
              image={extraionProofTab}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <VerificationWorkContent
              heading="Validation and fraud detection "
              paragraph="The date is checked to validate that it is within the allowable timeframe. Data-driven fraud detection routes out manipulated documents with fraudulent proof of residence."
              image={validationProoftab}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <VerificationWorkContent
              heading="Approve real customers"
              paragraph="The extracted data is sent to your back-office system via webhooks along with our Document Trust Score for final decision making and data retention."
              image={approveProofTab}
            />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};
