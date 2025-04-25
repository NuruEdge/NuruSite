<script setup>
defineProps({
  categories: Array,
  selected: String,
})

defineEmits(['select'])
</script>

<template>
  <div class="filter-bar">
    <button
      v-for="category in categories"
      :key="category"
      :class="{ active: selected === category }"
      @click="$emit('select', category)"
      class="filter-button"
    >
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.filter-button {
  background: transparent;
  border: 2px solid #e0e0e0;
  color: #636e72;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;

  &.active {
    border-color: #007bff;
    color: #007bff;
    background: rgba(0, 123, 255, 0.05);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
}

@media (max-width: 768px) {
  .filter-bar {
    gap: 0.75rem;
  }

  .filter-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
