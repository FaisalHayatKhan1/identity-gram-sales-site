import { DefaultConfigProps } from '@types';
import {
  carelibrary,
  identitykey,
  smdlogo,
  documentImg,
  dbslogo,
  drivertoklogo,
  fosterapplogo,
  address,
  aml,
  assisted,
  biometric,
  buzzhrlogo,
  mortgagebasket,
  rndlogo,
  globalMindedImage,
  highlyAutomatedImage,
  userFocusedImage,
  fastDecisions,
  fileCoverage,
  moreConversion,
  simpleExperiance,
  documentHome,
  drawingHome,
  identityHome,
  convertMore,
  lineOnboarding,
  reduceFriction,
  verifyFaster,
  complyImage,
  fakeidImage,
  convertUsersImage,
  reduceFrictionImage,
  softwareHero,
  identityHeroImage,
  proofHero,
  detectFack,
  complyRegulation,
  instantDesision,
  fewerManual,
  betterFraud,
  scalability,
} from '@images';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const REQUEST_STATUS = {
  IDEL: 'idel',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
  NOCONTENT: 'nocontent',
};

export const themeConfig: DefaultConfigProps = {
  defaultPath: '/dashboard',
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr',
};

// header data

export const Services = [
  {
    id: 1,
    link: '/services/identity-verification-solution',
    image: identitykey,
    title: 'Identity Verification Solution',
    description: 'Full-service identity verification solution',
  },
  {
    id: 2,
    image: documentImg,
    link: '/services/document-verification-software',
    title: 'Document Verification Software',
    description: 'Verify identity documents in real-time',
  },
  {
    id: 3,
    image: address,
    link: '/services/proof-of-address',
    title: 'Proof of Address',
    description: 'Automate your Proof of Address process',
  },
];

export const Product = [
  {
    id: 1,
    image: mortgagebasket,
    link: '/under-construction',
    title: 'Mortgage Basket',
    description: 'Mortgage and solicitor services',
  },
  {
    id: 2,
    image: dbslogo,
    link: '/under-construction',
    title: 'Check My DBS',
    description: 'Ensuring the safety of organizations',
  },
  {
    id: 3,
    image: fosterapplogo,
    link: '/under-construction',
    title: 'Foster App',
    description: 'HR files & foster parent files',
  },
  {
    id: 4,
    image: rndlogo,
    link: '/under-construction',
    title: 'RND Tax Claims',
    description: 'Tax Claims management system',
  },
  {
    id: 5,
    image: drivertoklogo,
    link: '/under-construction',
    title: 'Driver Tok',
    description: 'Solutions to charging stations',
  },
  {
    id: 6,
    image: carelibrary,
    link: '/under-construction',
    title: 'Care Library',
    description: 'Shift management system',
  },
  {
    id: 7,
    image: smdlogo,
    link: '/under-construction',
    title: 'Share My Dine',
    description: 'Dining services',
  },
  {
    id: 8,
    image: buzzhrlogo,
    link: '/under-construction',
    title: 'BuzzHR',
    description: 'Employee management system',
  },
];

export const Resources = [
  {
    id: 1,
    title: 'Case Studies',
    link: '/under-construction',
    description: 'Who we’re working with',
  },
  {
    id: 2,
    title: 'Help Center',
    link: '/under-construction',
    description: 'FAQs',
  },
  {
    id: 3,
    title: 'Documentation',
    link: '/under-construction',
    description: 'Find answers to your questions',
  },
];

export const About = [
  {
    id: 1,
    title: 'Our Mission',
    link: '/under-construction',
    description: ' Identity Gram timeline & meet our team',
  },
  {
    id: 2,
    title: 'Careers',
    link: '/under-construction',
    description: 'Join the growing Identity Gram team',
  },
  {
    id: 3,
    title: 'Partner With Us',
    link: '/under-construction',
    description: ' Access the Identity Gram press kit',
  },
];

export const pages = [
  {
    id: 0,
    name: 'Services',
    items: Services,
  },
  {
    id: 1,
    name: 'Products',
    items: Product,
  },
  {
    id: 2,
    name: 'Resources',
    items: Resources,
  },
  {
    id: 3,
    name: 'About',
    items: About,
  },
];

export const salesSiteFooterData = [
  {
    id: 1,
    title: 'Services',
    content: [
      {
        id: 1,
        subTitle: 'Identity Verification Solution',
        link: '/services/identity-verification-solution',
      },
      {
        id: 2,
        subTitle: 'Document Verification Software',
        link: '/services/document-verification-software',
      },
      {
        id: 3,
        subTitle: 'Proof of Address',
        link: '/services/proof-of-address',
      },
    ],
  },
  {
    id: 2,
    title: 'Resources',
    content: [
      { id: 1, subTitle: 'Case Studies', link: '/under-construction' },
      { id: 2, subTitle: 'Help Center', link: '/under-construction' },
      { id: 3, subTitle: 'Documentation', link: '/under-construction' },
    ],
  },
  {
    id: 3,
    title: 'About',
    content: [
      { id: 1, subTitle: 'Our Mission', link: '/under-construction' },
      { id: 2, subTitle: 'Careers', link: '/under-construction' },
      { id: 3, subTitle: 'Partner With Us', link: '/under-construction' },
    ],
  },
];

export const PolicyLinks = [
  {
    id: 1,
    name: 'Privacy Policy',
    link: '/under-construction',
    divider: '|',
  },
  {
    id: 2,
    name: 'Cookie Policy',
    link: '/under-construction',
    divider: '|',
  },
  {
    id: 3,
    name: 'Responsibility Disclosure',
    link: '/',
    divider: '|',
  },
  {
    id: 4,
    name: 'Security and Compliance',
    link: '/under-construction',
    divider: '|',
  },
  {
    id: 5,
    name: 'Recruitment Policy',
    link: '/under-construction',
    divider: '',
  },
];

export const complianceAndFraud = [
  {
    title: 'Highly automated',
    subTitle: '98% check automation rate powered by AI.',
    image: highlyAutomatedImage,
  },
  {
    title: 'User focused',
    subTitle: '95% of users get through on their first try.',
    image: userFocusedImage,
  },
  {
    title: 'Global minded',
    subTitle: 'Government-issued IDs covered',
    image: globalMindedImage,
  },
];

export const solutionCardDataOfHome = [
  {
    title: 'Fast Decisions',
    subTitle:
      '98% check automation rate gets customers through in about 6 seconds.',
    image: fastDecisions,
  },
  {
    title: 'Simple Experience',
    subTitle:
      'Real-time end user feedback and fewer steps gets 95% of users through on the first try.',
    image: simpleExperiance,
  },
  {
    title: 'File Coverage',
    subTitle:
      'An unmatched 10K+, and growing, government-issued IDs are covered.',
    image: fileCoverage,
  },
  {
    title: 'More Conversions',
    subTitle:
      'Up to 30% more customer conversions with superior accuracy and user experience.',
    image: moreConversion,
  },
];

export const serviceCardDataOfHome = [
  {
    id: 1,
    title: 'Identity Verification Solution',
    subTitle: 'Full-service online identity verification ',
    image: identityHome,
    slideImage: identityHeroImage,
    link: '/services/identity-verification-solution',
  },
  {
    id: 2,
    title: 'Document Verification Software',
    subTitle: 'Full-service online identity verification ',
    image: documentHome,
    slideImage: softwareHero,
    link: '/services/document-verification-software',
  },
  {
    id: 3,
    title: 'Proof of Address',
    subTitle: 'Full-service online identity verification ',
    image: drawingHome,
    slideImage: proofHero,
    link: '/services/proof-of-address',
  },
];

export const solutionCardDataOfIdentityVerification = [
  {
    title: 'Convert more users',
    subTitle:
      'With Identity Gram superior accuracy and user experience,convert more real customers.',
    image: convertMore,
  },
  {
    title: 'Reduce friction',
    subTitle:
      'Get users through identity verification in fewer steps and unnecessary user actions.',
    image: reduceFriction,
  },
  {
    title: 'Verify faster',
    subTitle:
      'Get accurate results in an average of 6 seconds and increase customer retention customer retention.',
    image: verifyFaster,
  },
  {
    title: 'Streamline onboarding',
    subTitle:
      'Up to 30% more customer conversions with superior accuracy and user experience.',
    image: lineOnboarding,
  },
];

export const softwareCardDataOfDocumentVerification = [
  {
    title: 'Detect fake & tampered IDs',
    subTitle:
      'With Identity Gram superior accuracy and user experience, convert more real customers.',
    image: detectFack,
  },
  {
    title: 'Extract & verify data',
    subTitle:
      'Get users through identity verification in fewer steps and unnecessary user actions.',
    image: reduceFriction,
  },
  {
    title: 'Comply with regulations',
    subTitle:
      'Get accurate results in an average of 6 seconds and increase customer retention.',
    image: complyRegulation,
  },
  {
    title: 'Convert more users',
    subTitle:
      'Up to 30% more customer conversions with superior accuracy and user experience.',
    image: convertMore,
  },
];

export const standingCardDataOfDocumentVerification = [
  {
    title: 'Highly automated',
    subTitle: '98% check automation rate powered by AI.',
    image: highlyAutomatedImage,
  },
  {
    title: 'User focused',
    subTitle: '95% of users get through on their first try.',
    image: userFocusedImage,
  },
  {
    title: 'Global minded',
    subTitle: 'Government-issued IDs covered',
    image: globalMindedImage,
  },
];

export const proofCardDataOfProofAddress = [
  {
    title: 'Instant decisions',
    subTitle:
      'Instantly approve honest users instead of making them wait hours, days, or even weeks.',
    image: instantDesision,
  },
  {
    title: 'Fewer manual processes',
    subTitle:
      'Reduce human error and the need for manual resources by automating POA data extraction.',
    image: fewerManual,
  },
  {
    title: 'Better fraud detection',
    subTitle:
      'Identity Gram’s data-driven fraud detection is consistent, auditable, and reliably detects fraudulent forms of identification.',
    image: betterFraud,
  },
  {
    title: 'Scalability',
    subTitle:
      'Identity Gram’s POA can grow with your company’s needs and keep up with times of increased user demand.',
    image: scalability,
  },
];
