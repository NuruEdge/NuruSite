<script setup>
import { ref, onMounted } from 'vue'

import defaultPfp from '@/assets/images/team/default_pfp.jpg'
import mumiaPfp from '@/assets/images/team/mumia-derick.png'
import FooterSection from '@/components/FooterSection.vue'

const missionVisible = ref(false)
const storyVisible = ref(false)
const teamVisible = ref(false)

onMounted(() => {
  const createObserver = (targetRef, sectionRef) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targetRef.value = true
          }
        })
      },
      { threshold: 0.1 },
    )
    const section = document.querySelector(sectionRef)
    if (section) observer.observe(section)
  }

  createObserver(missionVisible, '.mission-section')
  createObserver(storyVisible, '.story-section')
  createObserver(teamVisible, '.team-section')
})

const values = ref([
  {
    title: 'User-Centric Approach',
    icon: 'fa-solid fa-users',
    description: 'Putting user needs at the forefront of every solution',
  },
  {
    title: 'Transparent Communication',
    icon: 'fa-solid fa-comments',
    description: 'Fostering open dialogue with clients and stakeholders',
  },
  {
    title: 'Sustainable Solutions',
    icon: 'fa-solid fa-leaf',
    description: 'Creating solutions that are environmentally responsible',
  },
  {
    title: 'Continuous Innovation',
    icon: 'fa-solid fa-lightbulb',
    description: 'Embracing change and pushing boundaries in technology',
  },
  {
    title: 'Ethical Practices',
    icon: 'fa-solid fa-shield-alt',
    description: 'Upholding integrity and ethical standards in all endeavors',
  },
])

const team = ref([
  {
    name: 'Jacob Ochieng',
    role: 'CEO & Founder',
    image: defaultPfp,
    socials: [
      { icon: 'fa-brands fa-linkedin', link: '#' },
      { icon: 'fa-brands fa-twitter', link: '#' },
    ],
  },
  {
    name: 'Amani Rashid',
    role: 'Cloud Engineer',
    image: defaultPfp,
    socials: [
      { icon: 'fa-brands fa-linkedin', link: '#' },
      { icon: 'fa-brands fa-twitter', link: '#' },
    ],
  },
  {
    name: 'Mumia Derick',
    role: 'Tech Lead',
    image: mumiaPfp,
    socials: [
      { icon: 'fa-brands fa-linkedin', link: '#' },
      { icon: 'fa-brands fa-twitter', link: '#' },
    ],
  },
  {
    name: 'Asuza Frankline',
    role: 'Tech Lead',
    image: defaultPfp,
    socials: [
      { icon: 'fa-brands fa-linkedin', link: '#' },
      { icon: 'fa-brands fa-twitter', link: '#' },
    ],
  },
  {
    name: 'Dennis Kiptoo',
    role: 'Digital Marketing',
    image: defaultPfp,
    socials: [
      { icon: 'fa-brands fa-linkedin', link: '#' },
      { icon: 'fa-brands fa-twitter', link: '#' },
    ],
  },
])

const teamGrid = ref(null)
</script>

<template>
  <div class="about-page">
    <!-- Animated Hero Section -->
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="logo">
        <RouterLink to="/" class="logo-link"> Nuru Edge </RouterLink>
      </div>
      <div class="hero-content">
        <h1>Shaping Digital Excellence</h1>
        <p class="hero-subtitle">Where Innovation Meets Purpose</p>
      </div>
    </section>

    <!-- Content Section -->
    <div class="about-content">
      <!-- Mission Section -->
      <section class="mission-section" :class="{ show: missionVisible }">
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
          <div class="gallery-stack">
            <img src="@/assets/images/about-image.jpg" alt="About Image" class="main-image" />
          </div>
        </div>
      </section>

      <!-- Story Section -->
      <section class="story-section" :class="{ show: storyVisible }">
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
            <div class="values-container">
              <div class="value-item" v-for="(value, index) in values" :key="index">
                <div class="value-icon">
                  <font-awesome-icon :icon="value.icon" />
                </div>
                <div class="value-content">
                  <h4>{{ value.title }}</h4>
                  <p>{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section" :class="{ show: teamVisible }">
        <h2>Leadership Team</h2>
        <div class="team-container">
          <div class="team-grid" ref="teamGrid">
            <div class="team-member" v-for="(member, index) in team" :key="index">
              <div class="member-image">
                <div class="glow-effect"></div>
                <img :src="member.image" :alt="member.name" />
              </div>
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
              <div class="member-socials">
                <a v-for="(social, i) in member.socials" :key="i" :href="social.link">
                  <font-awesome-icon :icon="social.icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <FooterSection />
  </div>
</template>

<style lang="css" scoped>
.about-page {
  font-family: 'Jost', sans-serif;
  color: #2d3436;
}

/* Hero Section */
.about-hero {
  height: 80vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 2rem;
}

.about-hero .logo {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  transition: color 0.3s ease;
}
.about-hero .logo-link {
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
  font-weight: bold;
  transition: color 0.3s ease;
}
.about-hero .logo-link:hover {
  color: #007bff;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background-image: url('@/assets/images/background/homepage.jpg');
  background-size: cover;
  background-position: center;
  animation:
    zoomPan 20s infinite linear,
    float 8s infinite ease-in-out;
  z-index: -1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

@keyframes zoomPan {
  0% {
    transform: scale(1) translate(0, 0);
  }
  25% {
    transform: scale(1.1) translate(5%, 3%);
  }
  50% {
    transform: scale(1.05) translate(-4%, -2%);
  }
  75% {
    transform: scale(1.15) translate(3%, 5%);
  }
  100% {
    transform: scale(1) translate(0, 0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(90deg, #d3c3c3, #4a8dd5);
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

.hero-subtitle {
  font-size: 1.5rem;
  color: #cedadf;
  letter-spacing: 2px;
}

/* Mission Section */
.mission-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
  gap: 4rem;
  min-height: 600px;
  padding: 8rem 4rem;
  position: relative;
  overflow: hidden;
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
  transition: transform 0.3s ease;
  cursor: pointer;
}

.stat-item:hover {
  transform: translateY(-5px) scale(1.05);
  background: rgba(0, 123, 255, 0.1);
}

.stat-item h3 {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.image-container {
  position: relative;
  perspective: 1000px;
}

.gallery-stack {
  position: relative;
  width: 400px;
  height: 400px;
}

.main-image {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  transform: rotateZ(0deg);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.gallery-stack::before,
.gallery-stack::after {
  content: '';
  position: absolute;
  width: 95%;
  height: 95%;
  border-radius: 16px;
  background: linear-gradient(45deg, #dddfe4, #a5b4ce);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.gallery-stack::before {
  z-index: 2;
  top: -4%;
  right: -4%;
  transform: scale(0.98);
  box-shadow:
    15px 15px 30px rgba(0, 0, 0, 0.3),
    -5px -5px 20px rgba(255, 255, 255, 0.05);
}

.gallery-stack::after {
  z-index: 1;
  top: -8%;
  right: -8%;
  transform: scale(0.96);
  box-shadow:
    25px 25px 50px rgba(0, 0, 0, 0.4),
    -10px -10px 30px rgba(255, 255, 255, 0.05);
}

.gallery-stack:hover .main-image {
  transform: translate(5%, 5%) scale(1.05);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  filter: brightness(1.1);
}

.gallery-stack:hover::before,
.gallery-stack:hover::after {
  transform: rotateZ(0deg) translate(5%, 5%) scale(1);
  opacity: 0;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 123, 255, 0.15) 0%, rgba(154, 89, 255, 0.1) 100%);
  mix-blend-mode: multiply;
  z-index: 4;
  pointer-events: none;
}

/* Story Section */
.story-section {
  padding: 6rem 4rem;
  background: #f8f9fa;
}

.story-section h2 {
  max-width: 1200px;
  margin: 0 auto;
}

.story-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.story-grid .story-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: #636e72;
}

.values-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin: 2rem;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 0%, rgba(0, 123, 255, 0.05) 100%);
  }
}

.values-container {
  display: grid;
  gap: 1.5rem;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
}

.value-item:hover .value-icon {
  background: #0056b3;
}

.value-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  display: grid;
  place-items: center;
  color: #007bff;
  font-size: 1.2rem;
}

.value-content h4 {
  margin-bottom: 0.5rem;
  color: #2d3436;
}

/* Team Section */
.team-section {
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
}

.team-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  padding: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
}

.team-member {
  scroll-snap-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 123, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.member-image {
  height: 220px;
  width: 220px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(110%);
    transition:
      filter 0.3s ease,
      transform 0.3s ease;
  }
  &:hover img {
    filter: grayscale(0) contrast(100%);
  }
}

.glow-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 123, 255, 0.2) 0%, transparent 70%);
  animation: glowPulse 3s infinite;
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

.member-socials {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  a {
    color: #007bff;
    transition: transform 0.3s ease;
    &:hover {
      transform: translateY(-3px);
    }
  }
}

.slider-arrow {
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  &.prev {
    left: -30px;
  }
  &.next {
    right: -30px;
  }
}

/* Scroll Animations */
.mission-section,
.story-section,
.team-section {
  opacity: 0;
  transform: translateY(30px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.mission-section.show,
.story-section.show,
.team-section.show {
  opacity: 1;
  transform: translateY(0);
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
  position: relative;
  overflow: hidden;
}

.cta-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.1);
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  transition: transform 0.5s ease;
}

.cta-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

.cta-button:hover::after {
  transform: translate(-50%, -50%) scale(1);
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2d3436;
}
.section-subtitle {
  font-size: 1.1rem;
  color: #636e72;
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .mission-section {
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
  }

  .team-grid {
    grid-template-columns: repeat(2, auto);
    padding: 2rem 0;
  }
  .slider-arrow {
    display: block;
  }

  .image-container {
    display: none;
  }

  .story-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about-hero::before {
    animation:
      zoomPanMobile 20s infinite linear,
      float 8s infinite ease-in-out;
  }

  @keyframes zoomPanMobile {
    0% {
      transform: scale(1.2) translate(0, 0);
    }
    50% {
      transform: scale(1.4) translate(5%, 5%);
    }
    100% {
      transform: scale(1.2) translate(0, 0);
    }
  }
  .hero-content {
    padding: 2rem 0;
    max-width: 90%;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .lead-text {
    font-size: 1.2rem;
  }

  .highlight-stats {
    grid-template-columns: 1fr;
  }

  .story-section,
  .mission-section,
  .team-section,
  .about-content {
    padding: 4rem 1rem;
  }

  .text-content {
    padding: 0;
  }

  .values-card {
    margin: 0;
    padding: 0;
  }
  .values-container {
    grid-template-columns: 1fr;
  }
  .value-item {
    padding: 1rem;
  }
  .value-icon {
    font-size: 1.5rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    scroll-padding: 2rem;
    padding-bottom: 1rem;
  }

  .slider-arrow {
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.95);
    &.prev {
      left: 10px;
    }
    &.next {
      right: 10px;
    }
  }
}

@media (max-width: 480px) {
  .about-hero {
    height: 60vh;
  }
  .hero-content {
    padding: 1rem 0;
    max-width: 100%;
  }
  .hero-content h1 {
    font-size: 2rem;
  }
  .hero-content p {
    font-size: 1rem;
  }

  .lead-text {
    font-size: 1.4rem;
  }
  .team-grid {
    grid-template-columns: 100%;
  }
  .slider-arrow {
    display: none;
  }
}
</style>
