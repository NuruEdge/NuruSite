<script setup>
import HeroSection from '@/components/HeroSection.vue'
import BlogPreview from '@/components/homepage-components/BlogPreview.vue'
import CtaSection from '@/components/homepage-components/CtaSection.vue'
import FeaturedProjects from '@/components/homepage-components/FeaturedProjects.vue'
import ImpactStatistics from '@/components/homepage-components/ImpactStatistics.vue'
import ServicesSection from '@/components/homepage-components/ServicesSection.vue'
</script>

<template>
  <HeroSection />
  <main class="homepage">
    <ImpactStatistics />
    <FeaturedProjects />
    <ServicesSection />
    <BlogPreview />
    <CtaSection />
  </main>
</template>

<style lang="css" scoped>
/* Base Styles */
.homepage {
  font-family: 'Jost', sans-serif;
  color: #2d3436;
  width: 100%;
}
</style>
