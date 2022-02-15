import React from 'react';

import Thermometer from './Thermometer';
import '../Thermometer.css'

export default {
  title: 'Example/Thermometer',
  component: Thermometer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) =><div style={{padding: '50px'}}> <Thermometer {...args} /> </div>;
 
export const ThermometerComponent = Template.bind({});
ThermometerComponent.args = {
  theme: 'light',
  value: 28.77,
  max: 40,
  steps: '4',
  format: '°C',
  height: 150,
}


