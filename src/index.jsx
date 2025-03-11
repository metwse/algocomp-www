import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Homepage from './pages/Homepage';
import Timeline from './pages/Timeline';
import Details from './pages/Details';
import Faq from './pages/Faq';

import './index.scss';


createRoot(document.querySelector("main")).render(
    <StrictMode>
        <Homepage />
        <Timeline />
        <Details />
        <Faq />
    </StrictMode>
);
