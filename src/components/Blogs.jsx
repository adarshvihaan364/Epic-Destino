import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import './Blogs.css';

const blogs = [
  {
    id: 1,
    title: 'Top 10 Destinations for Your Next Summer Vacation',
    date: 'Oct 02',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'How to Pack Like a Pro for Your Global Adventures',
    date: 'Sep 28',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Sustainable Travel in 2024',
    date: 'Sep 15',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1500835595353-b0ad2e77b2ff?auto=format&fit=crop&q=80&w=800'
  }
];

const Blogs = () => {
  return (
    <section className="blogs-section">
      <div className="container">
        <div className="section-header">
          <span className="script-text">Blog & News</span>
          <h2 className="section-title">Explore <span className="highlight-text">Blogs And News</span></h2>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card animate-fade-in-up">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date">{blog.date}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><User size={14} /> By {blog.author}</span>
                  <span><Calendar size={14} /> 2024</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <a href="#" className="read-more">
                  Read More <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
