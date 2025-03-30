import './App.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo">
          <a href="#top" className="logo-link">
            <img src={`${import.meta.env.BASE_URL}main.png`} alt="Abhimat Dangi" className="nav-logo-img" />
          </a>
        </div>
        <div className="nav-links">
          <a href="#examples" className="nav-link">Edits</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#services" className="nav-link">Services</a>
        </div>
      </nav>
      
      <header id="top" className="hero">
        {/* Floating icons positioned within the hero */}
        <div className="floating-icons">
          <img src="premiere-pro.png" alt="Premiere Pro" />
          <img src="after-effects.png" alt="After Effects" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Helping creators and founders make videos that
            <span className="highlight">audiences can't stop watching.</span>
          </h1>
          
          <div className="hero-buttons">
            <a href="#examples" className="btn primary">View Edits</a>
          </div>

          <div className="clients-wrapper">
            <h2 className="clients-title">
              Worked <span className="clients-highlight">With</span>
            </h2>
            <div className="client-avatars">
              <div className="avatar-wrapper">
                <img src="koshis.jpg" alt="Koshis" />
              </div>
              <div className="avatar-wrapper">
                <img src="daivd.jpg" alt="Daivd" />
              </div>
              <div className="avatar-wrapper">
                <img src="creativeclipstudios.jpg" alt="Creative Clip Studios" />
              </div>
              <div className="avatar-wrapper">
                <img src="wayne.jpg" alt="Wayne" />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <section id="services" className="services">
        <h2 className="services-title">
          Our <span className="services-highlight">Services</span>
        </h2>
        <p className="services-subtitle">
          Transforming Your Vision into Reality: Our Services, Your Success Story!
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 7.5V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V7.5" stroke="currentColor" strokeWidth="2"/>
                <path d="M17 3L12 8L7 3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Short-Form Videos</h3>
            <p>Turn your content into scroll-stopping clips that capture attention instantly.</p>
            <div className="service-tags">
              <span>REELS</span>
              <span>SHORTS</span>
              <span>LINKEDIN</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3V21M12 3L7 8M12 3L17 8" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Long-Form Videos</h3>
            <p>Raw footage to engaging YouTube-ready videos that keep viewers watching.</p>
            <div className="service-tags">
              <span>YOUTUBE</span>
              <span>PODCASTS</span>
              <span>COURSES</span>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>VSLs</h3>
            <p>Compelling video sales letters that convert viewers into customers.</p>
            <div className="service-tags">
              <span>SALES</span>
              <span>MARKETING</span>
            </div>
          </div>
        </div>
      </section>
      
      <section id="examples" className="video-examples">
        <h2 className="examples-title">
          Short-Form <span className="examples-highlight">Example</span>
        </h2>
        <p className="examples-subtitle">
          Videos Optimized for All Platforms. Name any social media platform, we can handle it.
        </p>
        
        <div className="video-grid">
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/YpUUuBaIE5I"
                title="YouTube Shorts video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/-IaL88YLt6w"
                title="YouTube Shorts video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/zMm1nDtiYKk"
                title="YouTube Shorts video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/xI3G7My3A7Q"
                title="YouTube Shorts video 4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/27jmLEsZnbo"
                title="YouTube Shorts video 5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="video-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/qqYi8yGcjKg"
                title="YouTube Shorts video 6"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="longform-examples">
        <h2 className="examples-title">
          Long-Form <span className="examples-highlight">Example</span>
        </h2>
        
        <div className="longform-grid">
          <div className="longform-card">
            <div className="longform-wrapper">
              <iframe
                src="https://www.youtube.com/embed/7g4SgP4BJFA"
                title="Long form video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="longform-card">
            <div className="longform-wrapper">
              <iframe
                src="https://www.youtube.com/embed/lweSyrR0Y3M"
                title="Long form video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials">
        <h2 className="testimonials-title">
          What other <span className="testimonials-highlight">people</span> say about me?
        </h2>
        <div className="testimonials-scroll">
          <div className="testimonials-track">
            {/* Keep only the first three testimonial cards, remove duplicates */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Working with Abhimat has been an absolute game-changer! His edits are always creative, professional, and delivered on time. 
                  Highly recommend his services for anyone looking to elevate their content."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="koshis.jpg" alt="Koshis" />
                  </div>
                  <div className="author-info">
                    <h4>Koshish Rijal</h4>
                    <p>Content Creator</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Abhimat is one of the hardest workers I know! His willingness to improve and meet client demands is exceptional. 
                  He's been pivotal in our agency's growth and the revisions are always flawless."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="daivd.jpg" alt="Daivd" />
                  </div>
                  <div className="author-info">
                    <h4>David Murumbi</h4>
                    <p>Founder of Creative Clip Studios</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Abhimat provides a very professional service with a 'can do' attitude. His excellent work and responsiveness to revisions 
                  make him a highly recommended video editor for any project."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src="wayne.jpg" alt="Wayne" />
                  </div>
                  <div className="author-info">
                    <h4>Wayne Danai</h4>
                    <p>Online Course Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2 className="pricing-title">
          Find the <span className="pricing-highlight">Plan</span> That Fits You Perfectly!
        </h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="plan-name">Silver Plan</h3>
            <div className="price">
              <span className="amount">$600</span>
              <span className="period">/mo</span>
            </div>
            <p className="plan-description">
              Turn your content into eye-catching masterpieces that make viewers stop scrolling and start clicking!
            </p>
            <div className="pricing-divider"></div>
            <ul className="features">
              <li><span className="feature-dot"></span> Up to 12 short-form videos</li>
              <li><span className="feature-dot"></span> Unlimited revisions</li>
              <li><span className="feature-dot"></span> 1-2 day fast turnaround</li>
            </ul>
            <div className="card-buttons">
              <a 
                href="https://calendly.com/prodbyabhimat/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn subscribe"
              >
                Call
              </a>
              <a href="https://www.linkedin.com/in/abhimatdangi/" target="_blank" rel="noopener noreferrer" className="btn subscribe secondary">
                DM
              </a>
            </div>
          </div>

          <div className="pricing-card featured">
            <h3 className="plan-name">Gold Plan</h3>
            <div className="price">
              <span className="amount">$1000</span>
              <span className="period">/mo</span>
            </div>
            <p className="plan-description">
              Level up your content game with videos that captivate audiences and spark meaningful engagement!
            </p>
            <div className="pricing-divider"></div>
            <ul className="features">
              <li><span className="feature-dot"></span> Up to 25 short-form videos</li>
              <li><span className="feature-dot"></span> Unlimited revisions</li>
              <li><span className="feature-dot"></span> 24 hr fast turnaround</li>
            </ul>
            <div className="card-buttons">
              <a 
                href="https://calendly.com/prodbyabhimat/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn subscribe featured"
              >
                Call
              </a>
              <a href="https://www.linkedin.com/in/abhimatdangi/" target="_blank" rel="noopener noreferrer" className="btn subscribe secondary">
                DM
              </a>
            </div>
          </div>

          <div className="pricing-card">
            <h3 className="plan-name">Platinum Plan</h3>
            <div className="price">
              <span className="amount">$2100</span>
              <span className="period">/mo</span>
            </div>
            <p className="plan-description">
              Elevate your agency's portfolio with premium video content that helps clients dominate their niche!
            </p>
            <div className="pricing-divider"></div>
            <ul className="features">
              <li><span className="feature-dot"></span> Up to 60 short-form videos</li>
              <li><span className="feature-dot"></span> Unlimited revisions</li>
              <li><span className="feature-dot"></span> 12-24 hr fast turnaround</li>
            </ul>
            <div className="card-buttons">
              <a 
                href="https://calendly.com/prodbyabhimat/30min" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn subscribe"
              >
                Call
              </a>
              <a href="https://www.linkedin.com/in/abhimatdangi/" target="_blank" rel="noopener noreferrer" className="btn subscribe secondary">
                DM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
