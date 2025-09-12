// HomePage.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./HomePage.css";
import logo from "../../assets/logo.png"; // header + centered hero logo

const IDS = {
  about: "#about",
  work: "#work",
  services: "#services",
  locations: "#locations",
};

const LINKS = {
  meeting: "https://forms.lonestarpipes.services", // kept on hero only
};

const HomePage = () => {
  const [active, setActive] = useState(0); // 0..3
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % 4);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const handleControlClick = (idx) => {
    setActive(idx);
    startTimer();
  };

  const smoothScroll = (e, selector) => {
    if (selector && selector.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(selector);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <header className="main-header">
        <div className="header-wrapper">
          {/* Header logo (top-left, sticky via CSS) */}
          <div className="main-logo">
            <a
              href="#section-1"
              onClick={(e) => smoothScroll(e, "#section-1")}
              aria-label="Home"
            >
              <img src={logo} alt="Site logo" />
            </a>
          </div>

          <nav>
            <ul className="main-menu">
              <li>
                <a href={IDS.about} onClick={(e) => smoothScroll(e, IDS.about)}>
                  About
                </a>
              </li>
              <li>
                <a href={IDS.work} onClick={(e) => smoothScroll(e, IDS.work)}>
                  Work
                </a>
              </li>
              <li>
                <a
                  href={IDS.services}
                  onClick={(e) => smoothScroll(e, IDS.services)}
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href={IDS.locations}
                  onClick={(e) => smoothScroll(e, IDS.locations)}
                >
                  Locations
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO (unchanged except responsive stack via CSS) */}
      <section id="section-1">
        <div className="content-slider">
          <input type="radio" id="banner1" className="sec-1-input" name="banner" checked={active === 0} onChange={() => setActive(0)} />
          <input type="radio" id="banner2" className="sec-1-input" name="banner" checked={active === 1} onChange={() => setActive(1)} />
          <input type="radio" id="banner3" className="sec-1-input" name="banner" checked={active === 2} onChange={() => setActive(2)} />
          <input type="radio" id="banner4" className="sec-1-input" name="banner" checked={active === 3} onChange={() => setActive(3)} />

          <div className="slider">
            {/* Slide 1 — Intro */}
            <div id="top-banner-1" className={`banner ${active === 0 ? "active" : ""}`}>
              <div className="banner-inner-wrapper">
                <div className="hero-row">
                  <div className="hero-left hero-block">
                    <p className="hero-note">to learn about us</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={IDS.about} onClick={(e) => smoothScroll(e, IDS.about)}>
                      Click Here
                    </a>
                  </div>
                  <div className="hero-logo"><img src={logo} alt="Center logo" /></div>
                  <div className="hero-right hero-block">
                    <p className="hero-note">to schedule a meeting</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={LINKS.meeting} target="_blank" rel="noopener noreferrer">Click Here</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 — Work */}
            <div id="top-banner-2" className={`banner ${active === 1 ? "active" : ""}`}>
              <div className="banner-inner-wrapper">
                <div className="hero-row">
                  <div className="hero-left hero-block">
                    <p className="hero-note">to view our work</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={IDS.work} onClick={(e) => smoothScroll(e, IDS.work)}>
                      Click Here
                    </a>
                  </div>
                  <div className="hero-logo"><img src={logo} alt="Center logo" /></div>
                  <div className="hero-right hero-block">
                    <p className="hero-note">to schedule a meeting</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={LINKS.meeting} target="_blank" rel="noopener noreferrer">Click Here</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 — Services */}
            <div id="top-banner-3" className={`banner ${active === 2 ? "active" : ""}`}>
              <div className="banner-inner-wrapper">
                <div className="hero-row">
                  <div className="hero-left hero-block">
                    <p className="hero-note">to learn about our services</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={IDS.services} onClick={(e) => smoothScroll(e, IDS.services)}>
                      Click Here
                    </a>
                  </div>
                  <div className="hero-logo"><img src={logo} alt="Center logo" /></div>
                  <div className="hero-right hero-block">
                    <p className="hero-note">to schedule a meeting</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={LINKS.meeting} target="_blank" rel="noopener noreferrer">Click Here</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4 — Locations */}
            <div id="top-banner-4" className={`banner ${active === 3 ? "active" : ""}`}>
              <div className="banner-inner-wrapper">
                <div className="hero-row">
                  <div className="hero-left hero-block">
                    <p className="hero-note">to see our cities of operation</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={IDS.locations} onClick={(e) => smoothScroll(e, IDS.locations)}>
                      Click Here
                    </a>
                  </div>
                  <div className="hero-logo"><img src={logo} alt="Center logo" /></div>
                  <div className="hero-right hero-block">
                    <p className="hero-note">to schedule a meeting</p>
                    <div className="line"></div>
                    <a className="learn-more-cta" href={LINKS.meeting} target="_blank" rel="noopener noreferrer">Click Here</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom controls */}
          <nav>
            <div className="controls">
              <label htmlFor="banner1" className={active === 0 ? "active" : ""} onClick={() => handleControlClick(0)}>
                <span className="progressbar"><span className="progressbar-fill" /></span>
                <span>01</span> Intro
              </label>
              <label htmlFor="banner2" className={active === 1 ? "active" : ""} onClick={() => handleControlClick(1)}>
                <span className="progressbar"><span className="progressbar-fill" /></span>
                <span>02</span> Work
              </label>
              <label htmlFor="banner3" className={active === 2 ? "active" : ""} onClick={() => handleControlClick(2)}>
                <span className="progressbar"><span className="progressbar-fill" /></span>
                <span>03</span> Services
              </label>
              <label htmlFor="banner4" className={active === 3 ? "active" : ""} onClick={() => handleControlClick(3)}>
                <span className="progressbar"><span className="progressbar-fill" /></span>
                <span>04</span> Locations
              </label>
            </div>
          </nav>
        </div>
      </section>

      {/* === ABOUT — hero-style panel === */}
      <section id="about" className="page-section panel panel--rose">
        <div className="panel__bg" />
        <div className="panel__overlay" />
        <div className="container panel__content">
          <header className="panel__header">
            <p className="section-kicker">Who we are</p>
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              Local plumbing you can count on—repairs, replacements, and routine maintenance.
            </p>
          </header>

          <div className="cols-2 about-layout">
            {/* Left column — flexible height so it never overflows */}
            <div className="glass-card about-left">
              <p>
                We focus on straightforward service, clear communication, and clean workmanship.
                From small fixes to larger projects, our team aims to make plumbing simple and stress-free.
              </p>
              <ul className="pill-badges pill-badges--light">
                <li>Licensed & Insured</li>
                <li>Emergency Service Available</li>
                <li>Transparent Pricing</li>
                <li>Warranty Options</li>
              </ul>
            </div>

            {/* Right column — stats with icons */}
            <div className="stats">
              <div className="stat glass-tile">
                <div className="stat-icon"><i className="fa-solid fa-shield"></i></div>
                <span className="stat-num">Reliable</span>
                <span className="stat-label">Trusted Local Team</span>
              </div>
              <div className="stat glass-tile">
                <div className="stat-icon"><i className="fa-solid fa-headset"></i></div>
                <span className="stat-num">Responsive</span>
                <span className="stat-label">Emergency Support</span>
              </div>
              <div className="stat glass-tile">
                <div className="stat-icon"><i className="fa-solid fa-star"></i></div>
                <span className="stat-num">Quality</span>
                <span className="stat-label">Clean, Professional Work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === WORK — hero-style panel === */}
      <section id="work" className="page-section panel panel--ink">
        <div className="panel__bg" />
        <div className="panel__overlay" />
        <div className="container panel__content">
          <header className="panel__header">
            <p className="section-kicker">Recent projects</p>
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">Representative plumbing jobs</p>
          </header>

          <div className="grid-3">
            <article className="card glass-card">
              <div className="card-thumb gradient-thumb gradient-thumb--subtle" />
              <div className="card-body">
                <h3>Emergency Pipe Repair</h3>
                <ul className="feature-list">
                  <li>Burst / leaking lines</li>
                  <li>Moisture checks & mitigation coordination</li>
                  <li>Pressure testing after repairs</li>
                </ul>
                <div className="tag-row">
                  <span className="badge badge--light">Residential</span>
                  <span className="badge badge--light">Emergency</span>
                </div>
              </div>
            </article>

            <article className="card glass-card">
              <div className="card-thumb gradient-thumb gradient-thumb--subtle" />
              <div className="card-body">
                <h3>Sewer Line Rehabilitation</h3>
                <ul className="feature-list">
                  <li>Camera inspections & locating</li>
                  <li>Hydro-jetting & blockage removal</li>
                  <li>Spot repairs or replacement</li>
                </ul>
                <div className="tag-row">
                  <span className="badge badge--light">Sewer</span>
                  <span className="badge badge--light">Diagnostics</span>
                </div>
              </div>
            </article>

            <article className="card glass-card">
              <div className="card-thumb gradient-thumb gradient-thumb--subtle" />
              <div className="card-body">
                <h3>Water Heater Upgrade</h3>
                <ul className="feature-list">
                  <li>Tank & tankless installs</li>
                  <li>Code-compliant venting & pans</li>
                  <li>Old unit haul-away</li>
                </ul>
                <div className="tag-row">
                  <span className="badge badge--light">Upgrades</span>
                  <span className="badge badge--light">Efficiency</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* === SERVICES — hero-style panel === */}
      <section id="services" className="page-section panel panel--sun">
        <div className="panel__bg" />
        <div className="panel__overlay" />
        <div className="container panel__content">
          <header className="panel__header">
            <p className="section-kicker">What we do</p>
            <h2 className="section-title">Plumbing Services</h2>
            <p className="section-subtitle">
              General service, diagnostics, repairs, and replacements.
            </p>
          </header>

          <div className="grid-3">
            <article className="card service-card glass-card">
              <div className="icon-circle"><i className="fa-solid fa-wrench" aria-hidden="true"></i></div>
              <h3>Repairs & Fixtures</h3>
              <ul className="feature-list">
                <li>Leak detection, re-piping & shut-off valves</li>
                <li>Faucets, toilets, disposals & supply lines</li>
                <li>Slab leak assessments</li>
              </ul>
            </article>

            <article className="card service-card glass-card">
              <div className="icon-circle"><i className="fa-solid fa-toilet" aria-hidden="true"></i></div>
              <h3>Sewer & Drain</h3>
              <ul className="feature-list">
                <li>Camera inspections & locating</li>
                <li>Hydro-jetting & root intrusions</li>
                <li>Sewer line repairs & replacements</li>
              </ul>
            </article>

            <article className="card service-card glass-card">
              <div className="icon-circle"><i className="fa-solid fa-fire-flame-simple" aria-hidden="true"></i></div>
              <h3>Water Heaters</h3>
              <ul className="feature-list">
                <li>Tank & tankless installations</li>
                <li>T&P valves, expansion tanks & pans</li>
                <li>Maintenance & flush service</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* === LOCATIONS — hero-style panel === */}
      <section id="locations" className="page-section panel panel--paper">
        <div className="panel__bg" />
        <div className="panel__overlay" />
        <div className="container panel__content">
          <header className="panel__header">
            <p className="section-kicker">Where we work</p>
            <h2 className="section-title">Locations</h2>
            <p className="section-subtitle">Serving nearby communities</p>
          </header>

          <div className="city-grid">
            <div className="city-card glass-card">
              <h3>El Paso, TX</h3>
              <p className="city-note">Prompt scheduling</p>
            </div>
            <div className="city-card glass-card">
              <h3>Las Cruces, NM</h3>
              <p className="city-note">Flexible appointments</p>
            </div>
            <div className="city-card glass-card">
              <h3>Horizon City, TX</h3>
              <p className="city-note">By request</p>
            </div>
            <div className="city-card glass-card">
              <h3>St. Theresa, NM</h3>
              <p className="city-note">Limited availability</p>
            </div>
          </div>

          <div className="info-stripe glass-pill">
            <span className="badge badge--light">Licensed • Insured • Local</span>
            <span>Flexible scheduling • Emergency service available</span>
          </div>
        </div>
      </section>

      <footer id="main-footer" className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Lone Star Pipes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
