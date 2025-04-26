<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Services Section -->
  <section class="services-section" id="services">
    <div class="container">
      <h2>Our Services</h2>
      <div class="services-grid">
        <RouterLink to="/services#consulting" class="service-card">
          <div class="service-icon">
            <font-awesome-icon icon="fa-solid fa-briefcase" />
          </div>
          <h3>Consulting</h3>
          <p>Strategic business solutions tailored to your needs</p>
        </RouterLink>

        <RouterLink to="/services#design" class="service-card">
          <div class="service-icon">
            <font-awesome-icon icon="fa-solid fa-paintbrush" />
          </div>
          <h3>Design</h3>
          <p>Modern and user-centric design solutions</p>
        </RouterLink>

        <RouterLink to="/services#development" class="service-card">
          <div class="service-icon">
            <font-awesome-icon icon="fa-solid fa-code" />
          </div>
          <h3>Development</h3>
          <p>Full-stack development services</p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
}

/* Services Section */
.services-section {
  padding: 6rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d3436;
}

.service-card p {
  color: #636e72;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .service-card {
    padding: 1.5rem;
  }
}
</style>
