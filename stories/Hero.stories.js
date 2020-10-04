import React from 'react';
import Hero from '../comps/Hero'
import Hero2 from '../comps/Hero2'

export default {
  title: 'Example/Hero',
  component: Hero
};

export const BasicHero = () => <Hero />;
export const SecondHero = () => <Hero2 />;