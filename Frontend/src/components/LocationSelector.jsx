import React, { useState } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';

export default function LocationSelector() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const stateOptions =
    selectedCountry &&
    State.getStatesOfCountry(selectedCountry.value).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));

  const cityOptions =
    selectedState &&
    City.getCitiesOfState(selectedCountry.value, selectedState.value).map(
      (city) => ({
        value: city.name,
        label: city.name,
      })
    );

  return (
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold text-center text-black dark:text-white mb-2">
        Select Region
      </h2>

      <div>
        <label className="block text-sm font-medium text-black dark:text-white mb-1">
          Country
        </label>
        <Select
          options={countryOptions}
          value={selectedCountry}
          onChange={(val) => {
            setSelectedCountry(val);
            setSelectedState(null);
            setSelectedCity(null);
          }}
          placeholder="Choose Country"
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black dark:text-white mb-1">
          State
        </label>
        <Select
          options={stateOptions}
          value={selectedState}
          onChange={(val) => {
            setSelectedState(val);
            setSelectedCity(null);
          }}
          placeholder="Choose State"
          isDisabled={!selectedCountry}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black dark:text-white mb-1">
          City
        </label>
        <Select
          options={cityOptions}
          value={selectedCity}
          onChange={setSelectedCity}
          placeholder="Choose City"
          isDisabled={!selectedState}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
    </div>
  );
}
