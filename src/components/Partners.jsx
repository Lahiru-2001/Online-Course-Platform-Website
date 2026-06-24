import React from 'react';

export default function Partners() {
  return (
    <section className="partners-section" id="partners" aria-labelledby="partners-heading">
      <h2 className="section-title partners-title" id="partners-heading">
        Learn with 150+ leading universities and companies
      </h2>
      <div className="partners-list">
        {/* Google Badge */}
        <div className="partner-badge">
          <img src="Asseset/google.webp" alt="Google logo" className="badge-logo-img" />
          <span className="badge-text">Google</span>
        </div>

        {/* Kelaniya Badge */}
        <div className="partner-badge banner-badge-wrapper">
          <img src="Asseset/Screenshot 2026-06-17 174339.png" alt="University of Kelaniya banner" className="badge-banner-img" />
        </div>

        {/* OpenAI Badge */}
        <div className="partner-badge">
          <img src="Asseset/images (1).jpg" alt="OpenAI logo" className="badge-logo-img" />
          <span className="badge-text">OpenAI</span>
        </div>

        {/* Moratuwa Badge */}
        <div className="partner-badge banner-badge-wrapper">
          <img src="Asseset/Screenshot 2026-06-17 174546.png" alt="University of Moratuwa banner" className="badge-banner-img" />
        </div>

        {/* Michigan Badge */}
        <div className="partner-badge">
          <div className="badge-logo-michigan">
            <svg viewBox="0 0 100 100" className="badge-logo-svg">
              <rect width="100" height="100" fill="#00274c" rx="12" />
              <path d="M 15 15 H 36 L 50 48 L 64 15 H 85 V 85 H 67 V 38 L 54 75 H 46 L 33 38 V 85 H 15 Z" fill="#ffcb05" />
            </svg>
          </div>
          <span className="badge-text">University of Michigan</span>
        </div>
      </div>
    </section>
  );
}
