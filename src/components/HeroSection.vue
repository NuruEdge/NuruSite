<script setup>
import NavBar from './NavBar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import images directly
import heroBackground1 from '@/assets/hero-background-1.jpg'
import heroBackground2 from '@/assets/hero-background-2.jpg'
import heroBackground3 from '@/assets/hero-background-3.jpg'
import heroBackground4 from '@/assets/hero-background-4.jpg'
import heroBackground5 from '@/assets/hero-background-5.jpg'
import heroBackground6 from '@/assets/hero-background-6.jpg'
import heroBackground7 from '@/assets/hero-background-7.png'
import heroBackground8 from '@/assets/hero-background-8.jpg'

const backgrounds = [
  heroBackground1,
  heroBackground2,
  heroBackground3,
  heroBackground4,
  heroBackground5,
  heroBackground6,
  heroBackground7,
  heroBackground8,
]

// Preload images with Promise
const preloadImages = (urls) => {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = url
          img.onload = resolve
          img.onerror = resolve
        }),
    ),
  )
}

const currentBgIndex = ref(0)
const nextBgIndex = ref(1)
const activeBg = ref(0)

const isVisible = ref(true)
const isTransitioning = ref(false)
let intervalId = null
let observer = null

// Handle background transition
const animateBackground = () => {
  if (isTransitioning.value) return // Prevent transitions while one is in progress

  isTransitioning.value = true

  // Toggle active background
  activeBg.value = activeBg.value === 0 ? 1 : 0

  // Update indices for the next transition
  if (activeBg.value === 0) {
    nextBgIndex.value = (currentBgIndex.value + 1) % backgrounds.length
  } else {
    currentBgIndex.value = (nextBgIndex.value + 1) % backgrounds.length
  }

  // Reset transition flag after animation completes
  setTimeout(() => {
    isTransitioning.value = false
  }, 2000)
}

onMounted(async () => {
  // Preload images first
  await preloadImages(backgrounds)

  const heroElement = document.querySelector('#hero')
  if (heroElement) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting

          if (entry.isIntersecting) {
            // Start the background animation when the hero section is in view
            if (!intervalId) {
              intervalId = setInterval(animateBackground, 8000)
            }
          } else {
            // Stop the background animation when the hero section is out of view
            clearInterval(intervalId)
            intervalId = null
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    )
    observer.observe(heroElement)
  }

  // Ensure hero is visible initially
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
  observer?.disconnect()
})
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-background"></div>
    <!-- Current Background -->
    <div
      class="hero-overlay"
      :class="{ active: activeBg === 0, hidden: activeBg === 1 }"
      :style="{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }"
    ></div>

    <!-- Next Background -->
    <div
      class="hero-overlay next"
      :class="{ active: activeBg === 1, hidden: activeBg === 0 }"
      :style="{ backgroundImage: `url(${backgrounds[nextBgIndex]})` }"
    ></div>

    <NavBar />

    <div class="hero-content">
      <h1 class="hero-title" :class="{ 'slide-in': isVisible }">Welcome to Nuru Edge</h1>
      <p class="hero-description" :class="{ 'fade-in': isVisible }">
        Where we strive and ensure we provide products and services of the best quality.
      </p>
      <div class="hero-buttons" :class="{ 'button-enter': isVisible }">
        <button class="btn btn-primary">Get Started</button>
        <button class="btn btn-secondary">Learn More</button>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  text-align: center;
  color: white;
  overflow: hidden;
  /* GPU acceleration */
  transform: translateZ(0);
  font-family: 'Jost', sans-serif;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%);
  z-index: -1;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0;
  transition:
    opacity 2s cubic-bezier(0.4, 0, 0.2, 1),
    transform 30s linear;
  animation: panZoom 30s linear infinite;
  transform: scale(1);
  backface-visibility: hidden;
  will-change: transform, opacity;
}

.hero-overlay.active {
  opacity: 0.5;
  z-index: 0;
  animation: panZoom 30s linear infinite;
}

.hero-overlay.hidden {
  opacity: 0;
  z-index: -1;
}
.hero-overlay.next {
  opacity: 0.5;
  z-index: 1;
}
/* Background Animations */
@keyframes panZoom {
  0% {
    transform: scale(1) translateX(0);
  }
  25% {
    transform: scale(1.05) translateX(-2%);
  }
  50% {
    transform: scale(1.1) translateX(2%);
  }
  75% {
    transform: scale(1.05) translateX(-1%);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}

/* Content Animations */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  text-align: left;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: contentEnter 1.5s ease-out forwards;
  animation-delay: 0.5s;
  transform: translateZ(0);
}

/* Fix 4: Add a class to make content visible immediately if needed */
@keyframes contentEnter {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.slide-in {
  animation: slideIn 1.5s ease-out forwards;
}

.fade-in {
  animation: fadeIn 2s ease-out forwards;
  animation-delay: 0.5s;
}

.hero-title {
  position: relative;
  display: inline-block;
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
}

.hero-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80%;
  height: 3px;
  background: white;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.hero-title:hover:after {
  transform: scaleX(1);
}

.hero-description {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.button-enter {
  animation: buttonEnter 1s ease-out forwards;
  animation-delay: 1s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes buttonEnter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: 0.5s;
}

.btn:hover:before {
  left: 100%;
}

.btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.btn:active {
  transform: translateY(-1px) scale(0.98);
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

@media (max-width: 768px) {
  .hero-background {
    background-color: rgba(0, 0, 0, 0.8);
  }
  .hero-content {
    margin-left: 2rem;
    max-width: 90%;
  }

  .hero-title {
    font-size: 2.5rem;
  }
  .hero-title::after {
    width: 80%;
  }
  .hero-description {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-content {
    align-items: center;
    justify-content: center;
  }
  .hero-title {
    font-size: 2rem;
  }

  .hero-description {
    font-size: 1rem;
    text-align: center;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 10px;
  }
  .btn {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}
</style>
