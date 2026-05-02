import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../utils/constants';
import './Blogs.css';

const Blogs = () => {
  return (
    <section className="blogs-section">
      <div className="container">
        <div className="section-header">
          <span className="script-text">Blog & News</span>
          <h2 className="section-title">Explore <span className="highlight-text">Blogs And News</span></h2>
        </div>

        <div className="blogs-grid">
          {BLOG_POSTS.map((blog) => (
            <div key={blog.id} className="blog-card animate-fade-in-up">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><User size={14} /> {blog.author}</span>
                  <span><Calendar size={14} /> {blog.date}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
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
