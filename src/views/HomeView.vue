<script setup>
import { ref, computed } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import BlogPreview from '@/components/homepage-components/BlogPreview.vue'
import CtaSection from '@/components/homepage-components/CtaSection.vue'
import FeaturedProjects from '@/components/homepage-components/FeaturedProjects.vue'
import ImpactStatistics from '@/components/homepage-components/ImpactStatistics.vue'
import ServicesSection from '@/components/homepage-components/ServicesSection.vue'
import HomepageImg from '@/assets/images/background/homepage.jpg'
import ContactSection from '@/components/homepage-components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import FaqsSection from '@/components/FaqsSection.vue'
import { useFaqsStore } from '@/stores/faqs'

const backgroundOpacity = ref(0.15)
const backgroundImage = ref(HomepageImg)

const faqsStore = useFaqsStore()
const homepageFaqs = computed(() => {
  return faqsStore.faqs.filter((faq) => faq.category === 'General')
})
</script>

<template>
  <HeroSection />
  <main class="homepage">
    <!-- Dynamic Background Image Container -->
    <div class="background-container">
      <div
        class="background-image"
        :style="{
          backgroundImage: `url(${backgroundImage})`,
          opacity: backgroundOpacity,
        }"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="content-container">
      <ImpactStatistics />
      <FeaturedProjects />
      <ServicesSection />
      <BlogPreview />
      <CtaSection />
      <ContactSection />
      <FaqsSection :faqs="homepageFaqs" category="General" :show-limit="3" />
    </div>
  </main>
  <FooterSection />
</template>

<style lang="css" scoped>
/* Base Styles */
.homepage {
  font-family: 'Jost', sans-serif;
  color: #2d3436;
  width: 100%;
  position: relative;
  overflow: hidden;
}

/* Background Container and Image */
.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/background/homepage.jpg');
  background-size: cover;
  background-position: center;
  transform-origin: center;
  animation:
    zoomPan 30s linear infinite,
    float 8s infinite ease-in-out;
  transition:
    transform 0.1s ease-out,
    opacity 0.1s ease-out,
    filter 0.1s ease-out;
  will-change: transform, opacity, filter;
}

@keyframes zoomPan {
  0% {
    transform: scale(1) translate(0);
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
    transform: scale(1) translate(0);
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

/* Content Container */
.content-container {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  padding-top: 20px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.05);
}

/* Media Query for smaller screens */
@media (max-width: 768px) {
  .content-container {
    border-radius: 15px 15px 0 0;
    margin-top: -15px;
  }
}
</style>
