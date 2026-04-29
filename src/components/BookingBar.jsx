import React from 'react';
import { MapPin, Plane, Calendar, Users, Search, ChevronDown } from 'lucide-react';
import './BookingBar.css';

const BookingBar = () => {
  return (
    <div className="booking-bar animate-fade-in-up">
      <div className="booking-field">
        <div className="field-icon">
          <MapPin size={20} />
        </div>
        <div className="field-content">
          <label>Location</label>
          <div className="input-wrapper">
            <select>
              <option>Where are you going?</option>
              <option>Italy</option>
              <option>Switzerland</option>
              <option>Japan</option>
              <option>France</option>
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
            <select>
              <option>All Type</option>
              <option>Adventure</option>
              <option>Luxury</option>
              <option>Budget</option>
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
          <input type="text" placeholder="Select Date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} />
        </div>
      </div>

      <div className="booking-field">
        <div className="field-icon">
          <Users size={20} />
        </div>
        <div className="field-content">
          <label>Traveler</label>
          <input type="number" placeholder="0" min="1" />
        </div>
      </div>

      <button className="search-btn">
        <Search size={24} color="white" />
      </button>
    </div>
  );
};

export default BookingBar;
