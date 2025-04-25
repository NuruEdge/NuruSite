<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-content">
        <h1>Shaping Digital Excellence</h1>
        <p class="hero-subtitle">Where Innovation Meets Purpose</p>
      </div>
    </section>

    <!-- Content Section -->
    <div class="about-content">
      <!-- Mission Section -->
      <section class="mission-section">
        <div class="text-content">
          <h2>Our Mission</h2>
          <p class="lead-text">
            Empowering businesses through cutting-edge digital solutions that drive growth and
            transform possibilities into reality.
          </p>
          <div class="highlight-stats">
            <div class="stat-item">
              <h3>250+</h3>
              <p>Projects Delivered</p>
            </div>
            <div class="stat-item">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div class="stat-item">
              <h3>15+</h3>
              <p>Global Awards</p>
            </div>
          </div>
        </div>
        <div class="image-container">
          <div class="gradient-overlay"></div>
          <img src="@/assets/images/about-image.jpg" alt="About Image" class="about-image" />
        </div>
      </section>

      <!-- Story Section -->
      <section class="story-section">
        <h2>Our Story</h2>
        <div class="story-grid">
          <div class="story-text">
            <p class="story-paragraph">
              Founded in 2025, Nuru Edge began as a small team of digital enthusiasts passionate
              about creating meaningful web experiences. Today, we've grown into a full-service
              digital agency serving clients worldwide.
            </p>
            <p class="story-paragraph">
              Our journey has been marked by continuous learning and adaptation. We've evolved
              alongside the digital landscape, mastering new technologies while maintaining our core
              values of integrity and innovation.
            </p>
            <RouterLink to="/contact" class="cta-button"> Get Started → </RouterLink>
          </div>
          <div class="values-card">
            <h3>Core Values</h3>
            <ul class="values-list">
              <li>User-Centric Approach</li>
              <li>Transparent Communication</li>
              <li>Sustainable Solutions</li>
              <li>Continuous Innovation</li>
              <li>Ethical Practices</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <h2>Leadership Team</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-image"></div>
            <h3>Jacob Ochieng</h3>
            <p>CEO & Founder</p>
          </div>
          <div class="team-member">
            <div class="member-image"></div>
            <h3>Amani Rashid</h3>
            <p>Cloud Engineer</p>
          </div>
          <div class="team-member">
            <div class="member-image"></div>
            <h3>Mumia Derick</h3>
            <p>Tech Lead</p>
          </div>
          <div class="team-member">
            <div class="member-image"></div>
            <h3>Asuza Frankline</h3>
            <p>Tech Lead</p>
          </div>
          <div class="team-member">
            <div class="member-image"></div>
            <h3>Dennis Kiptoo</h3>
            <p>Digital Marketing</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="css" scoped>
.about-page {
  font-family: 'Jost', sans-serif;
  color: #2d3436;
}

/* Hero Section */
.about-hero {
  height: 60vh;
  background: linear-gradient(45deg, rgba(0, 123, 255, 0.1), #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(45deg, #2d3436, #007bff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #636e72;
  letter-spacing: 2px;
}

/* Mission Section */
.mission-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
  padding: 6rem 4rem;
  margin: 0 auto;
}

.text-content {
  padding: 4rem;
  align-self: center;
}

.lead-text {
  font-size: 1.2rem;
  line-height: 1.4;
  margin-bottom: 3rem;
  color: #2d3436;
}

.highlight-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: rgba(0, 123, 255, 0.05);
  border-radius: 12px;
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.image-container {
  background: url('@/assets/about-team.jpg') center/cover;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.1));
  border-radius: 16px;
  transition: all 0.3s ease;
  z-index: 1;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
.about-image:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Story Section */
.story-section {
  padding: 6rem 4rem;
  background: #f8f9fa;
}

.story-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.story-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #636e72;
}

.values-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.values-list {
  list-style: none;
  padding: 0;
}

.values-list li {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  font-weight: 500;
}

.values-list li:last-child {
  border-bottom: none;
}

/* Team Section */
.team-section {
  padding: 6rem 2rem;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-member {
  padding: 2rem;
}

.member-image {
  height: 200px;
  width: 200px;
  background: #f1f3f5;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s ease;
}

.team-member:hover .member-image {
  transform: scale(1.05);
}

/* CTA Button */
.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-top: 2rem;
}

.cta-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .mission-section {
    grid-template-columns: 1fr;
  }

  .image-container {
    display: none;
  }

  .story-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .highlight-stats {
    grid-template-columns: 1fr;
  }

  .text-content {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }

  .lead-text {
    font-size: 1.5rem;
  }
}
</style>
