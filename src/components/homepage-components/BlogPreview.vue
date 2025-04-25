<script setup></script>

<template>
  <!-- Blog Preview -->
  <section class="blog-section" id="blog">
    <div class="container">
      <div class="section-header">
        <h2>Latest Insights</h2>
      </div>
      <div class="blog-grid">
        <div class="blog-card">
          <div class="blog-meta">
            <span class="category">Design</span>
            <span class="date">Mar 15, 2024</span>
          </div>
          <h3>Future of Web Design in 2024</h3>
          <p>Exploring emerging trends in modern web design practices...</p>
        </div>

        <div class="blog-card">
          <div class="blog-meta">
            <span class="category">Technology</span>
            <span class="date">Mar 12, 2024</span>
          </div>
          <h3>AI in Modern Development</h3>
          <p>How artificial intelligence is shaping software development...</p>
        </div>
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

.blog-section {
  padding: 6rem 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.view-all {
  color: #2d3436;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.view-all:hover {
  color: #007bff;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-3px);
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #636e72;
}

.blog-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.blog-card p {
  color: #636e72;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .blog-card {
    padding: 1.5rem;
  }
}
</style>
