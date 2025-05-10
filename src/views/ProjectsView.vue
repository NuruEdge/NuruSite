<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import ProjectFilter from '@/components/ProjectFilter.vue'

// Import project images
import AirbnbImage from '@/assets/images/airbnb.jpeg'
import ECommerceImage from '@/assets/images/techcommerce.png'
import MusicAppImage from '@/assets/images/vue-player.png'
import NavBar from '@/components/NavBar.vue'
import FooterSection from '@/components/FooterSection.vue'

// Project data
const allProjects = ref([
  {
    id: 1,
    title: 'AirBnb Platform',
    category: 'Web Development',
    image: AirbnbImage,
    tech: ['Vue', 'Node.js', 'MySQL'],
    year: 2023,
  },
  {
    id: 2,
    title: 'E-Commerce Solution',
    category: 'Full Stack',
    image: ECommerceImage,
    tech: ['React', 'MongoDB', 'Paypal', 'Mpesa'],
    year: 2024,
  },
  {
    id: 3,
    title: 'Music Streaming App',
    category: 'Mobile',
    image: MusicAppImage,
    tech: ['Vue JS', 'Firebase', 'HTML5'],
    year: 2023,
  },
  // Add more projects as needed
])

// Filter functionality
const selectedCategory = ref('all')
const categories = ['all', 'Web Development', 'Full Stack', 'Mobile']

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return allProjects.value
  return allProjects.value.filter((project) => project.category === selectedCategory.value)
})
</script>

<template>
  <main class="projects-page">
    <div class="navbar">
      <NavBar />
    </div>
    <section class="page-header">
      <div class="overlay"></div>
      <div class="header-content">
        <h1 class="page-title">Digital Excellence Portfolio</h1>
        <p class="page-subtitle">Exploring innovative solutions through modern development</p>
      </div>
    </section>

    <section class="projects-main">
      <div class="container">
        <ProjectFilter
          :categories="categories"
          :selected="selectedCategory"
          @select="selectedCategory = $event"
        />

        <div class="projects-grid">
          <RouterLink
            v-for="project in filteredProjects"
            :key="project.id"
            :to="`/projects/${project.id}`"
            class="project-card"
          >
            <div class="image-container">
              <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
              <div class="image-overlay"></div>
            </div>

            <div class="project-info">
              <div class="meta-info">
                <span class="project-year">{{ project.year }}</span>
                <span class="project-category">{{ project.category }}</span>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="tech-stack">
                <span v-for="(tech, index) in project.tech" :key="index" class="tech-item">
                  {{ tech }}
                </span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
    <FooterSection />
  </main>
</template>

<style lang="css" scoped>
.projects-page {
  width: 100%;
  min-height: 100dvh;
  padding: 0;
  background: #fafafa;
  font-family: 'Jost', sans-serif;
}

.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/hero-background-2.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(2px);
  animation:
    slidePan 20s infinite linear,
    float 8s infinite ease-in-out;
  z-index: 0;
  will-change: transform, background-image;
}

@keyframes slidePan {
  0% {
    transform: scale(1) translateX(0, 0);
  }
  25% {
    transform: scale(1.1) translateX(5%, 3%);
  }
  50% {
    transform: scale(1.05) translateX(-4%, -2%);
  }
  75% {
    transform: scale(1.15) translateX(3%, 5%);
  }
  100% {
    transform: scale(1) translateX(0, 0);
  }
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2%);
  }
  100% {
    transform: translateY(0);
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  transition: opacity 0.3s ease;
}

.page-header {
  padding: 8rem 0 4rem;
  position: relative;
  text-align: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
  color: white;
}

.page-header .header-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
}

.page-title {
  font-size: 3rem;
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(90deg, #f9f9f9, #4a8dd5);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textShine 6s infinite linear;
  background-size: 200% auto;
}

@keyframes textShine {
  to {
    background-position: 200% center;
  }
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.projects-main {
  padding: 4rem 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 2rem 0;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: #2d3436;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);

    .project-title {
      color: #007bff;
    }

    .image-overlay {
      opacity: 0.2;
    }
  }
}

.image-container {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), transparent);
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.project-info {
  padding: 1.5rem;
}

.meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #636e72;
}

.project-year {
  font-weight: 500;
}

.project-category {
  background: rgba(0, 123, 255, 0.1);
  color: #007bff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-item {
  background: #f1f3f5;
  color: #2d3436;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .page-header {
    padding: 6rem 0 3rem;
  }

  .page-title {
    font-size: 2.2rem;
  }

  .projects-grid {
    gap: 1.5rem;
  }

  .project-info {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
