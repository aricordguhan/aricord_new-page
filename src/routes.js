import Home from './pages/Home';
import About from './pages/About';
import Offerings from './pages/Offerings';
import Coverage from './pages/Coverage';
import Accelerators from './pages/Accelerators';
import Stories from './pages/Stories';
import News from './pages/News';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import BlogAiAgentsSapBtp from './pages/BlogAiAgentsSapBtp';
import BlogBankingSubledger from './pages/BlogBankingSubledger';
import BlogJouleS4hanaTip from './pages/BlogJouleS4hanaTip';

export const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/offerings', label: 'Offerings' },
  { to: '/coverage', label: 'Coverage' },
  { to: '/accelerators', label: 'Accelerators' },
  { to: '/stories', label: 'Client Stories' },
  { to: '/news', label: 'News' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact', cta: true },
];

export const ROUTES = [
  {
    path: '/',
    Component: Home,
    title: 'Aricord — SAP Finance Transformation Partner',
    description:
      'Aricord is a UK-registered SAP partner focused on finance, regulatory reporting and performance management. S/4HANA, Central Finance, SAP BTP and subledger consulting delivered by a senior, specialist team.',
  },
  {
    path: '/about',
    Component: About,
    title: 'About — Aricord',
    description:
      'About Aricord: a specialist SAP finance partner with 150+ years of combined experience, and the leadership team behind it.',
  },
  {
    path: '/offerings',
    Component: Offerings,
    title: 'Offerings — Aricord',
    description:
      'Aricord offerings: S/4HANA Finance, Central Finance, subledger and regulatory solutions, BTP, AI and ongoing support.',
  },
  {
    path: '/coverage',
    Component: Coverage,
    title: 'Solution Coverage — Aricord',
    description:
      'SAP solution areas Aricord covers, including the process and controls framework that implementation success depends on.',
  },
  {
    path: '/accelerators',
    Component: Accelerators,
    title: 'Accelerators — Aricord',
    description: 'Aricord accelerators: reusable frameworks that speed up SAP finance transformation across three phases.',
  },
  {
    path: '/stories',
    Component: Stories,
    title: 'Client Stories — Aricord',
    description:
      'Aricord client stories: S/4HANA, subledger, RAR and SAP BTP engagements and the results they delivered.',
  },
  {
    path: '/news',
    Component: News,
    title: 'News Center — Aricord',
    description:
      'Aricord News Center — updates, insights and press on SAP finance transformation: S/4HANA, Central Finance, SAP BTP and regulatory reporting.',
  },
  {
    path: '/careers',
    Component: Careers,
    title: 'Careers — Aricord',
    description: 'Careers at Aricord: SAP finance implementation, AMS and data migration roles in a small, senior team.',
  },
  {
    path: '/contact',
    Component: Contact,
    title: 'Contact — Aricord',
    description: 'Contact Aricord to discuss your SAP finance transformation programme.',
  },
  {
    path: '/blog-ai-agents-sap-btp',
    Component: BlogAiAgentsSapBtp,
    title: 'AI Agents on SAP BTP — Aricord Blog',
    description:
      'How Aricord built a project revenue assistant on SAP BTP that turns SAP ECC and BW plan-vs-actual data into conversational, auditable variance insight.',
  },
  {
    path: '/blog-banking-subledger',
    Component: BlogBankingSubledger,
    title: 'The Banking Subledger Imperative — Aricord Blog',
    description:
      'Why IFRS 18, BCBS 239, IFRS 9 and IFRS 17 make banking subledgers essential — a comparison of SAP FPSL, Aptitude, Oracle and data lakes, and the case for SAP PAPM ARE.',
  },
  {
    path: '/blog-joule-s4hana-tip',
    Component: BlogJouleS4hanaTip,
    title: 'Quick Tip: Joule for S/4HANA Public Cloud — Aricord Blog',
    description:
      'Joule not answering in SAP S/4HANA Public Cloud? Check that business roles are exposed to BTP, run the identity provisioning job, and confirm the roles reach SAP Build Work Zone.',
  },
];
