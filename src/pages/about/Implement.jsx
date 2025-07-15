// pages/AboutUsEn.jsx
import React from 'react';
import AboutUs from './AboutUs';
import { aboutUsContentEN } from './ContentEnglish';
import { aboutUsContentRU } from './ContentRu';


export const AboutUsEn = () => <AboutUs content={aboutUsContentEN} />;
export const AboutUsRu = () => <AboutUs content={aboutUsContentRU} />;


