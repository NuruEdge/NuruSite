<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
  <!-- CTA Section -->
  <section class="cta-section">
    <div class="container">
      <h2>Ready to Start Your Project?</h2>
      <p>Let's create something amazing together</p>
      <a href="#contact" @click.prevent="handleSectionLink('contact')" class="cta-button"
        >Get in Touch</a
      >
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

.cta-section {
  padding: 6rem 0;
  text-align: center;
  background: #2d3436;
  color: white;
}

.cta-section h2 {
  color: white;
  margin-bottom: 1.5rem;
}

.cta-section p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: #dfe6e9;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }

  .cta-section {
    padding: 4rem 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  .cta-section {
    padding: 4rem 0;
  }
  .cta-button {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
