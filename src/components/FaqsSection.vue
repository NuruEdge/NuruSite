<script setup>
import { useFaqsStore } from '@/stores/faqs'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
  showLimit: {
    type: Number,
    default: 5,
  },
  category: {
    type: String,
    default: 'all',
  },
})

const route = useRoute()
const faqsStore = useFaqsStore()

// Determine if we're on the FAQs page
const isFAQsPage = computed(() => route.path === '/faqs')

// Use the provided FAQs prop directly
const visibleFaqs = computed(() => {
  return isFAQsPage.value ? props.faqs : props.faqs.slice(0, props.showLimit)
})

const toggleFAQ = (index) => {
  // Find the actual index in the store
  const faqInStore = faqsStore.faqs.findIndex(
    (faq) =>
      faq.question === props.faqs[index].question && faq.category === props.faqs[index].category,
  )

  if (faqInStore !== -1) {
    faqsStore.toggleFAQ(faqInStore)
  }
}
</script>

<template>
  <section class="faqs-section">
    <h2 class="section-title">Frequently Asked Questions</h2>

    <div class="faqs-list">
      <div
        v-for="(faq, index) in visibleFaqs"
        :key="index"
        class="faq-item"
        :class="{ active: faq.isOpen }"
      >
        <div class="faq-header" @click="toggleFAQ(index)">
          <h3 class="faq-question">{{ faq.question }}</h3>
          <div class="faq-icon">
            <FontAwesomeIcon :icon="faq.isOpen ? faChevronUp : faChevronDown" class="icon" />
          </div>
        </div>

        <transition name="slide">
          <div v-show="faq.isOpen" class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </transition>
      </div>
    </div>

    <div v-if="!isFAQsPage && faqs.length > showLimit" class="view-more">
      <RouterLink to="/faqs" class="view-more-btn">
        <span>View All FAQs </span>
        <span class="icon"><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.faqs-section {
  padding: 4rem 2rem;
  background: transparent;
  font-family: 'Jost', sans-serif;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2d3436;
  font-weight: 500;
}

.faqs-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.faq-item.active {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
}

.faq-question {
  margin: 0;
  font-size: 1.1rem;
  color: #2d3436;
}

.faq-icon span {
  font-size: 1.5rem;
  color: #007bff;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: #636e72;
  line-height: 1.6;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.view-more {
  text-align: center;
  margin-top: 3rem;
}

.view-more-btn {
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: row;
  padding: 1rem 2rem;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.view-more-btn .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  font-size: 1.2rem;
}

.view-more-btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .faqs-section {
    padding: 2rem 1rem;
  }
  .section-title {
    font-size: 2rem;
  }

  .faq-header {
    padding: 1rem;
  }

  .faq-question {
    font-size: 1rem;
  }
}
</style>
