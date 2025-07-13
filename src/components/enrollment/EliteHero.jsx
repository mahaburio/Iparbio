import React, { useState } from 'react';
import SearchDropdown from '../dashboard/SearchBar';

const EliteHero = ({ title, description, image, searchBar = false }) => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [searchText, setSearchText] = useState('');

  const options = [
    'All',
    'Image Only',
    'Presentation',
    'Print Tool',
    'Social Shareable',
    'Logo/Branding',
    'Video',
    'e Card'
  ];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content pt-5">
              {searchBar && (

                <SearchDropdown
                  options={options}
                  selectedOption={selectedOption}
                  onOptionChange={setSelectedOption}
                  searchValue={searchText}
                  onSearchChange={setSearchText}
                />

              )}
              <h1>{title}</h1>
              <p className="mt-4">{description}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src={image} alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteHero;
