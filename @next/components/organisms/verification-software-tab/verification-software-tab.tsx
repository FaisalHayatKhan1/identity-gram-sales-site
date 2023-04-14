import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import {
  softwareRealTab,
  verificationDecisionImage,
  verificationSnapImage,
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
export const VerificationSoftwareTab = () => {
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
              '& .css-1opsn0k-MuiButtonBase-root-MuiTab-root': {
                maxWidth: '420px !important',
              },
            }}
          >
            <Tab
              label={
                <VerificationWorkTab
                  numberTab="1"
                  headingTab="Snap a photo of the ID > > >"
                />
              }
              {...a11yProps(0)}
              sx={{
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
                  headingTab="Real Time Feedback > > >"
                />
              }
              sx={{
                whiteSpace: 'nowrap',
              }}
              {...a11yProps(1)}
            />
            <Tab
              label={
                <VerificationWorkTab
                  numberTab="3"
                  headingTab="Get a Decision > > >"
                />
              }
              sx={{
                whiteSpace: 'nowrap',
              }}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <Box sx={{ minHeight: '400px', py: '20px' }}>
          <TabPanel value={value} index={0}>
            <VerificationWorkContent
              heading="Snap a photo of the ID"
              paragraph="It’s as simple as taking a selfie and snapping a photo of an ID for end users to get verified in a matter of seconds. 
              Identity gram’s accurate fraud prevention will stop badactors, while bringing in more customers for your business."
              image={verificationSnapImage}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <VerificationWorkContent
              heading="Real Time Feedback"
              paragraph="With Assisted Image Capture built into our SDKs, the user is guided through the entire process. Whether the document image is too dark, too bright, has a glare, or the data is obstructed, Identity gram prompts the user to make adjustments. This leads to a 30% increase in conversion rates and up to 95% of users are verified on the first try.
              "
              image={softwareRealTab}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <VerificationWorkContent
              heading="Get a Decision"
              paragraph="The data is sent to Identity gram and our AI-powered
              identity verification technology provides a decision in a
              matter of seconds, based on the identity checks your
              business needs."
              image={verificationDecisionImage}
            />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};
