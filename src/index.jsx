import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Navigation from './components/navigation/Navigation.jsx'

import Homepage from './pages/homepage/Homepage'
import Details from './pages/details/Details'
import Timeline from './pages/timeline/Timeline'
import Format from './pages/format/Format'
import Faq from './pages/faq/Faq'

import './css/index.scss'
import './css/default.scss'
import './css/shared.scss'


const main = document.querySelector('main'); 

createRoot(main).render(
    <StrictMode>
        <Navigation />
        <div>
            <Homepage />
            <Details />
            <Timeline />
            <Format />
            <Faq />
        </div>
    </StrictMode>
);
