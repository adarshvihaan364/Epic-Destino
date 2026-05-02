import React, { useState } from 'react';
import { MapPin, Plane, Calendar, Users, Search, ChevronDown } from 'lucide-react';
import { DESTINATIONS, TOUR_TYPES } from '../utils/constants';
import './BookingBar.css';

const BookingBar = () => {
  const [searchData, setSearchData] = useState({
    location: DESTINATIONS[0],
    tourType: TOUR_TYPES[0],
    date: '',
    travelers: 1
  });

  const handleSearch = () => {
    console.log('Searching for:', searchData);
    // Future implementation: filter tours or navigate to search results
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="booking-bar animate-fade-in-up">
      <div className="booking-field">
        <div className="field-icon">
          <MapPin size={20} />
        </div>
        <div className="field-content">
          <label>Location</label>
          <div className="input-wrapper">
            <select 
              value={searchData.location}
              onChange={(e) => setSearchData({...searchData, location: e.target.value})}
            >
              {DESTINATIONS.map(dest => <option key={dest} value={dest}>{dest}</option>)}
            </select>
            <ChevronDown size={14} className="dropdown-icon" />
          </div>
        </div>
      </div>

      <div className="booking-field">
        <div className="field-icon">
          <Plane size={20} />
        </div>
        <div className="field-content">
          <label>Tour Type</label>
          <div className="input-wrapper">
            <select 
              value={searchData.tourType}
              onChange={(e) => setSearchData({...searchData, tourType: e.target.value})}
            >
              {TOUR_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            <ChevronDown size={14} className="dropdown-icon" />
          </div>
        </div>
      </div>

      <div className="booking-field">
        <div className="field-icon">
          <Calendar size={20} />
        </div>
        <div className="field-content">
          <label>Tour Date</label>
          <input 
            type="text" 
            placeholder="Select Date" 
            value={searchData.date}
            onFocus={(e) => e.target.type = 'date'} 
            onBlur={(e) => e.target.type = 'text'}
            onChange={(e) => setSearchData({...searchData, date: e.target.value})}
          />
        </div>
      </div>

      <div className="booking-field">
        <div className="field-icon">
          <Users size={20} />
        </div>
        <div className="field-content">
          <label>Traveler</label>
          <input 
            type="number" 
            placeholder="0" 
            min="1" 
            value={searchData.travelers}
            onChange={(e) => setSearchData({...searchData, travelers: parseInt(e.target.value) || 1})}
          />
        </div>
      </div>

      <button className="search-btn" onClick={handleSearch}>
        <Search size={24} color="white" />
      </button>
    </div>
  );
};

export default BookingBar;
