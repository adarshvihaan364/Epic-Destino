import React from 'react';
import { Plane, Users, Award, Briefcase } from 'lucide-react';
import './Counters.css';

const stats = [
  { id: 1, icon: <Plane size={30} />, value: '12K+', label: 'Tours Success' },
  { id: 2, icon: <Users size={30} />, value: '25K+', label: 'Happy Traveler' },
  { id: 3, icon: <Award size={30} />, value: '50+', label: 'Awards Winning' },
  { id: 4, icon: <Briefcase size={30} />, value: '15+', label: 'Our Experience' },
];

const Counters = () => {
  return (
    <section className="counters-section">
      <div className="container counters-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="counter-item animate-fade-in-up">
            <div className="counter-icon">
              {stat.icon}
            </div>
            <div className="counter-info">
              <h3 className="counter-value">{stat.value}</h3>
              <p className="counter-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counters;
