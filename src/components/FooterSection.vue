<script setup>
import { ref } from 'vue'
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
</script>

<template>
  <!-- Footer -->
  <footer class="main-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <RouterLink to="/"><h3>NuruEdge</h3></RouterLink>
          <p>Innovating digital experiences</p>
        </div>
        <div class="footer-links">
          <div class="link-group">
            <h4>Company</h4>
            <RouterLink to="/about">About</RouterLink>
            <a href="#services" @click.prevent="handleSectionLink('services')"> Services </a>
            <RouterLink to="/projects">Projects</RouterLink>
          </div>
          <div class="link-group">
            <h4>Resources</h4>
            <a href="#blog" @click.prevent="handleSectionLink('blog')"> Blog </a>
            <a href="#contact" @click.prevent="handleSectionLink('contact')"> Contact </a>
            <RouterLink to="/faq">FAQ</RouterLink>
          </div>
          <div class="link-group">
            <h4>Legal</h4>
            <RouterLink to="/privacy">Privacy Policy</RouterLink>
            <RouterLink to="/terms">Terms of Service</RouterLink>
          </div>
        </div>
      </div>
      <div class="separator"></div>
      <div class="footer-bottom">
        <p>&copy; 2024 Nuru Edge. All rights reserved.</p>
        <div class="social-links">
          <a href="#" aria-label="Twitter"
            ><span class="icon"> <font-awesome-icon icon="fa-brands fa-twitter" /> </span
          ></a>
          <a href="#" aria-label="LinkedIn"
            ><span class="icon"> <font-awesome-icon icon="fa-brands fa-linkedin" /> </span
          ></a>
          <a href="#" aria-label="Instagram"
            ><span class="icon"> <font-awesome-icon icon="fa-brands fa-instagram" /> </span
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.container {
  max-width: 100%;
}
h3 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
}
h3::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: #b2bec3;
  margin-top: 0.5rem;
}
h3::before {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: #b2bec3;
  margin-top: 0.5rem;
}
.footer-section {
  padding: 6rem 0;
}
.main-footer {
  background: #2d3436;
  color: white;
  padding: 2rem 0 2rem;
  width: 100%;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1200px;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-brand p {
  color: #b2bec3;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #f9f9f9;
}

.link-group a {
  display: block;
  color: #b2bec3;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: #007bff;
  background-color: transparent;
}

.separator {
  width: 100%;
  height: 1px;
  background: #404a4d;
  margin: 2rem auto;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-bottom p {
  color: #b2bec3;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-links .icon {
  font-size: 1.25rem;
  color: #b2bec3;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links .icon:hover {
  color: #007bff;
  background-color: transparent;
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer-section {
    padding: 4rem 0;
  }
  h3 {
    font-size: 2rem;
  }
  h3::after,
  h3::before {
    width: 40px;
    height: 2px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
  .footer-links {
    grid-template-columns: 1fr;
  }
  .footer-brand {
    text-align: start;
  }
  .footer-brand p {
    font-size: 1rem;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .link-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .link-group h4 {
    font-size: 1.25rem;
  }
  .link-group a {
    font-size: 0.9rem;
  }
  .separator {
    width: 100%;
    height: 1px;
    background: #404a4d;
    margin: 2rem auto;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-bottom p {
    margin: 0;
  }
  .footer-bottom .social-links {
    justify-content: center;
  }
  .footer-bottom .social-links .icon {
    font-size: 1.5rem;
  }
  .footer-bottom .social-links .icon:hover {
    transform: scale(1.2);
  }
}
</style>
