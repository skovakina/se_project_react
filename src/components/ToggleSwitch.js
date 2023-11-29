import React, { useContext } from 'react';
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';
import '../blocks/ToggleSwitch.css';

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(CurrentTemperatureUnitContext);

  return (
    <>
      <input className="switch-checkbox" id={`switch-new`} type="checkbox" onChange={handleToggleSwitchChange} />
      <label className="switch-label" htmlFor={`switch-new`}>
        <div className="switch-slider">{currentTemperatureUnit}</div>
        <span className="switch-text">F</span>
        <span className="switch-text">C</span>
      </label>
    </>
  );
}
