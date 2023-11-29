import React, { useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleCurrentTemperature } = useContext(CurrentTemperatureUnitContext);

  return (
    <>
      <input className="switch-checkbox" id={`switch-new`} type="checkbox" onChange={handleCurrentTemperature} />
      <label className="switch-label" htmlFor={`switch-new`}>
        <div className="switch-slider">{currentTemperatureUnit}</div>
        <span className="switch-text">F</span>
        <span className="switch-text">C</span>
      </label>
    </>
  );
}