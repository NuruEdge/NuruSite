<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isActive = ref(false)

const toggleMenu = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <nav class="navbar">
    <div class="logo">NuruEdge</div>

    <ul class="nav-links" :class="{ active: isActive }">
      <li><RouterLink to="/" @click="isActive = false">Home</RouterLink></li>
      <li><RouterLink to="/about" @click="isActive = false">About</RouterLink></li>
      <li><RouterLink to="/contact" @click="isActive = false">Contact</RouterLink></li>
      <li><RouterLink to="/services" @click="isActive = false">Services</RouterLink></li>
      <li><RouterLink to="/blog" @click="isActive = false">Blog</RouterLink></li>
      <li><RouterLink to="/projects" @click="isActive = false">Projects</RouterLink></li>
    </ul>

    <div v-if="!isActive">
      <font-awesome-icon icon="fa-solid fa-bars" class="hamburger" @click="toggleMenu" />
    </div>
    <div v-else>
      <font-awesome-icon icon="fa-solid fa-xmark" class="hamburger" @click="toggleMenu" />
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
  padding: 1rem 2rem 1rem 5rem;
  background-color: transparent;
  color: white;
  z-index: 1000;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 10px 10px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li {
  display: inline;
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
  background-color: #555;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: auto;
  padding: 0.5rem;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 2rem;
  }
  .logo {
    font-size: 1.5rem;
    text-shadow: none;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 1rem;
    background-color: #333;
    width: 60%;
    padding: 1rem;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}
</style>
