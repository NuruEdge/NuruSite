import { defineStore } from 'pinia'

export const useFaqsStore = defineStore('faqs', {
  state: () => ({
    faqs: [
      {
        question: 'What is NuruEdge?',
        answer: 'NuruEdge is a platform that provides innovative digital solutions...',
        category: 'General',
        isOpen: false,
      },
      {
        question: 'What services do you offer?',
        answer:
          'We offer a range of services including web development, mobile app development, and digital marketing...',
        category: 'General',
        isOpen: false,
      },
      {
        question: 'Where is the company located?',
        answer:
          'Currently we are available in an online digital space but physical location will be launched soon...',
        category: 'General',
        isOpen: false,
      },
      {
        question: 'How do I report a bug?',
        answer: 'To report a bug, please use the contact form or email us directly...',
        category: 'Technical',
        isOpen: false,
      },
      {
        question: 'How do I contact support?',
        answer: 'You can reach us via the contact form or email us directly...',
        category: 'General',
        isOpen: false,
      },
    ],
  }),

  getters: {
    getByCategory: (state) => (category) => {
      return state.faqs.filter((faq) => (category === 'all' ? true : faq.category === category))
    },
  },
  actions: {
    toggleFAQ(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    },
    async fetchFAQs() {
      try {
        const response = await fetch('https://api.example.com/faqs')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        this.faqs = data.map((faq) => ({
          ...faq,
          isOpen: false,
        }))
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      }
    },
  },
})
