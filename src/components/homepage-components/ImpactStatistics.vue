<script setup></script>

<template>
  <section class="impact-statistics">
    <div class="container">
      <h2>Impact Statistics</h2>
      <div class="statistics-grid">
        <div class="statistic-card">
          <h3>10+</h3>
          <p>Projects Completed</p>
        </div>
        <div class="statistic-card">
          <h3>5+</h3>
          <p>Countries Served</p>
        </div>
        <div class="statistic-card">
          <h3>200+</h3>
          <p>Lives Impacted</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.impact-statistics {
  width: 100%;
  padding: 4rem 0; /* Increased padding */
  text-align: center;
  color: #333;
  font-family: 'Jost', sans-serif;
}

.impact-statistics h2 {
  /* Fixed typo here */
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2d3436;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
}

.impact-statistics h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 6%;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  width: 80%;
  height: 3px;
  background-color: #007bff;
}

.impact-statistics h2:hover::after {
  transform: scaleX(1);
}

.statistics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.statistic-card {
  background-color: #fff;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.statistic-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.statistic-card h3 {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 1rem;
  font-weight: 700;
}

.statistic-card p {
  font-size: 18px;
  color: #666;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .statistics-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    padding: 0 1rem;
  }

  .statistic-card {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .impact-statistics h2 {
    font-size: 2rem;
  }

  .statistic-card h3 {
    font-size: 2.5rem;
  }
}
</style>
