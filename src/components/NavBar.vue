<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isActive = ref(false)
const isMobile = ref(false)

const handleSectionLink = (hash) => {
  isActive.value = false
  if (route.path === '/') {
    // If already on homepage, scroll to section
    const section = document.getElementById(hash)
    if (section) {
      let top = section.offsetTop + section.clientHeight
      const offset = 20
      if (isMobile.value) {
        top -= offset
      } else {
        top -= offset * 2
      }
      // Scroll to the section
      window.scrollTo({ top, behavior: 'smooth' })
    }
  } else {
    // Navigate to homepage with hash
    router.push({ path: '/', hash: `#${hash}` })
  }
}

const toggleMenu = () => {
  isActive.value = !isActive.value
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <nav class="navbar">
    <div class="logo">NuruEdge</div>

    <ul class="nav-links" :class="{ active: isActive }">
      <li><RouterLink to="/" @click="isActive = false">Home</RouterLink></li>
      <li><RouterLink to="/about" @click="isActive = false">About</RouterLink></li>
      <li>
        <a href="#contact" @click.prevent="handleSectionLink('contact')"> Contact </a>
      </li>
      <li>
        <a href="#services" @click.prevent="handleSectionLink('services')"> Services </a>
      </li>
      <li>
        <a href="#blog" @click.prevent="handleSectionLink('blog')"> Blog </a>
      </li>
      <li><RouterLink to="/projects" @click="isActive = false">Projects</RouterLink></li>
    </ul>

    <div v-if="isMobile" class="hamburger-container">
      <font-awesome-icon
        v-if="!isActive"
        icon="fa-solid fa-bars"
        class="hamburger"
        @click="toggleMenu"
      />
      <font-awesome-icon v-else icon="fa-solid fa-xmark" class="hamburger" @click="toggleMenu" />
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: transparent;
  border-radius: 0 0 20px 0;
  box-sizing: border-box;
  color: white;
  z-index: 1000;
  transition:
    background-color 0.3s ease,
    padding 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  transition: color 0.3s ease;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  transition: background-color 0.3s ease;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.hamburger-container {
  display: none;
}

.hamburger {
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.hamburger:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 2rem;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
    padding: 1rem;
    text-align: center;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger-container {
    display: block;
    z-index: 1001;
  }

  .nav-links a {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 1rem;
  }

  .logo {
    font-size: 1.2rem;
  }
}
</style>
