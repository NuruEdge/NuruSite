<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import AirbnbImage from '@/assets/images/airbnb.jpeg'
import ECommerceImage from '@/assets/images/techcommerce.png'
import MusicAppImage from '@/assets/images/vue-player.png'

// Dynamic project data
const projects = ref([
  {
    id: 1,
    title: 'AirBnb Platform',
    category: 'Web Development',
    image: AirbnbImage,
    color: '#3498db',
    link: 'https://github.com/muderick/airBnB',
  },
  {
    id: 3,
    title: 'E-Commerce Solution',
    category: 'Full Stack Development',
    image: ECommerceImage,
    color: '#9b59b6',
    link: 'https://techcommerce.mudericks-projects.vercel.app/',
  },
  {
    id: 4,
    title: 'Music App',
    category: 'Mobile Development',
    image: MusicAppImage,
    color: '#e74c3c',
    link: 'https://muderick.github.io/vueplayer/',
  },
])

// For animation on scroll
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 },
  )

  const section = document.querySelector('.projects-section')
  if (section) {
    observer.observe(section)
  }
})
</script>

<template>
  <!-- Featured Projects -->
  <section class="projects-section" :class="{ 'is-visible': isVisible }">
    <div class="container">
      <div class="section-header">
        <h2>Featured Projects</h2>
        <p class="section-subtitle">Discover our most impactful work</p>
      </div>

      <div class="projects-grid">
        <RouterLink
          v-for="project in projects"
          :key="project.id"
          :to="project.link"
          target="_blank"
          class="project-card"
          :class="{ show: isVisible }"
        >
          <div
            class="project-image"
            :style="{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }"
          >
            <div class="category-tag" :style="{ backgroundColor: project.color }">
              {{ project.category }}
            </div>
          </div>
          <div class="project-content">
            <h3>{{ project.title }}</h3>
            <div class="view-project">
              <span>View Project</span>
              <font-awesome-icon icon="fa-solid fa-arrow-right" style="margin-left: 0.5rem" />
            </div>
          </div>
        </RouterLink>
      </div>

      <div class="view-all-container">
        <RouterLink to="/projects" class="view-all-btn"> View All Projects </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #34495e;
  --accent-color: #3498db;
  --text-color: #333;
  --light-text: #7f8c8d;
  --background: #f8f9fa;
  --card-background: #ffffff;
  --shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 60px;
  height: 3px;
  background: var(--accent-color);
  transform: translateX(-50%);
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--light-text);
  margin-top: 1rem;
}

.projects-section {
  padding: 6rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: var(--text-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.project-card.show {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.project-card:nth-child(1) {
  transition-delay: 0.1s;
}
.project-card:nth-child(2) {
  transition-delay: 0.2s;
}
.project-card:nth-child(3) {
  transition-delay: 0.3s;
}
.project-card:nth-child(4) {
  transition-delay: 0.4s;
}

.project-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.project-image {
  height: 220px;
  position: relative;
  overflow: hidden;
}

.category-tag {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: white;
  font-weight: 500;
  border-top-right-radius: 8px;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.view-project {
  display: flex;
  align-items: center;
  color: var(--accent-color);
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: transform 0.2s ease;
}

.view-project svg {
  margin-left: 0.5rem;
  transition: transform 0.2s ease;
}

.project-card:hover .view-project {
  transform: translateX(3px);
}

.project-card:hover .view-project svg {
  transform: translateX(3px);
}

.view-all-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.view-all-btn {
  background-color: transparent;
  border: 2px solid var(--accent-color);
  color: var(--accent-color);
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background-color: var(--accent-color);
  color: rgba(0, 0, 255, 0.9);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .project-image {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-image {
    height: 200px;
  }
}
</style>
