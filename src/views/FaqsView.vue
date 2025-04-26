<script setup>
import { ref, computed } from 'vue'
import NavBar from '@/components/NavBar.vue'
import FaqsSection from '@/components/FaqsSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import { useFaqsStore } from '@/stores/faqs'

const faqsStore = useFaqsStore()
const searchQuery = ref('')
const selectedCategory = ref('all')

// Dynamically get categories from FAQs data
const categories = computed(() => {
  const allCategories = faqsStore.faqs.map((faq) => faq.category)
  return [...new Set(allCategories)]
})

// Filter FAQs based on search query and selected category
const filteredFaqs = computed(() => {
  return faqsStore.faqs.filter((faq) => {
    const matchesSearch =
      searchQuery.value === '' ||
      faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === 'all' || faq.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>

<template>
  <main class="faqs-page">
    <div class="navbar">
      <NavBar />
    </div>
    <section class="page-header">
      <div class="overlay"></div>
      <div class="container">
        <h1>Help Center</h1>
        <div class="search-filter">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search FAQs..."
            class="search-input"
          />
          <select v-model="selectedCategory" class="category-select">
            <option value="all">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <p class="section-subtitle">Find answers to your questions</p>
      </div>
    </section>

    <FaqsSection :faqs="filteredFaqs" :show-limit="filteredFaqs.length" class="full-faqs" />
  </main>
  <FooterSection />
</template>

<style scoped>
.faqs-page {
  width: 100%;
}

.faqs-section {
  padding: 4rem 0;
  background: transparent;
}

.faqs-page .faqs-section {
  padding: 2rem 0;
}

.faqs-page .faqs-section .section-title {
  display: none;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #b5c3c7;
  margin-top: 1rem;
}

.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.page-header {
  padding: 6rem 0;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.page-header::before {
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

.page-header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.container h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.search-filter {
  max-width: 800px;
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
}

.search-input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
}

.category-select {
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
}

.full-faqs {
  padding: 4rem 0;
  background: white;
}

@media (max-width: 768px) {
  .search-filter {
    flex-direction: column;
  }

  .search-input,
  .category-select {
    width: 100%;
  }
}
</style>
