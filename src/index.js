import React, { useState } from 'react';

import './Thermometer.css';

const Thermometer = ({
  theme = 'light',
  size = 'normal',
  value = 0,
  height = 200,
  max = 100,
  format = '',
  steps = 0,
}) => {
  const [intervals, setIntervals] = useState(() => createIntervals(steps, max, format));

  const heightPercent = { height: `${(value / max) * 100}%` };
  const heightBgColor = { height: `calc(${height}px - 57px)` };
  const valstr = String(value) + String(format);
  const stepIntervals = createIntervalsUI(intervals);

  return (
    <div
      style={{ height: `${height}px` }}
      className={`thermometer thermometer--${size} thermometer--theme-${theme}`}
    >
      <div className="thermometer__draw-a"></div>
      <div className="thermometer__draw-b"></div>
      <div className="thermometer__meter">
        <ul className="thermometer__statistics">{stepIntervals}</ul>
        <div style={heightPercent} className="thermometer__mercury">
          <div className="thermometer__percent-current">{valstr}</div>
          <div className="thermometer__mask">
            <div className="thermometer__bg-color" style={heightBgColor}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const createIntervals = (steps, max, format) => {
  if (!steps) return [];
  const x = [];
  for (let step = 0; step <= steps; step++) {
    const val = parseFloat(((max / steps) * step).toFixed(0));
    const percent = (val / max) * 100;
    const interval = { percent, label: val + format };
    x.push(interval);
  }
  return x;
};

const createIntervalsUI = intervals =>
  intervals.map((step, i) => (
    <li key={i} style={{ bottom: `calc(${step.percent}% - 1px)` }}>
      {step.label}
    </li>
  ));

export default Thermometer;
