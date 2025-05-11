<script setup>
import { reactive, ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const formData = reactive({
  name: '',
  email: '',
  message: '',
})

const isLoading = ref(false)
const honeypot = ref('')
const formSubmitted = ref(false)
const formError = ref(null)

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const sendEmail = async () => {
  // Reset state
  formError.value = null

  // Bot detection
  if (honeypot.value !== '') return

  // Client-side validation
  if (!formData.name.trim()) {
    formError.value = 'Name is required'
    return
  }

  if (!formData.email.trim() || !validateEmail(formData.email)) {
    formError.value = 'Please enter a valid email address'
    return
  }

  if (!formData.message.trim() || formData.message.trim().length < 10) {
    formError.value = 'Message must be at least 10 characters'
    return
  }

  isLoading.value = true

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message')
    }

    // Success handling
    toast.success('Message sent successfully! We will get back to you soon.')
    formSubmitted.value = true

    // Clear form
    formData.name = ''
    formData.email = ''
    formData.message = ''

    // Reset form state after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false
    }, 5000)
  } catch (error) {
    toast.error(error.message || 'Failed to send message. Please try again.')
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <!-- Contact Section -->
  <section class="contact-section" id="contact">
    <div class="container">
      <h2>Get in Touch</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Let's Connect</h3>
          <p>Have a project in mind or just want to say hello? We'd love to hear from you.</p>
          <div class="contact-details">
            <div class="detail-item location">
              <a
                href="https://www.google.com/maps/place/Nairobi,+Kenya/@-1.286389,36.817223,12z"
                target="_blank"
                rel="noopener noreferrer"
                class="icon"
                aria-label="View location on Google Maps"
              >
                <font-awesome-icon icon="fa-solid fa-map-marker-alt" />
              </a>
              <a
                href="https://www.google.com/maps/place/Nairobi,+Kenya/@-1.286389,36.817223,12z"
                target="_blank"
                rel="noopener noreferrer"
                class="location-link"
              >
                <p>Location: Nairobi, Kenya</p>
              </a>
            </div>
            <div class="detail-item email">
              <a href="mailto:nurruedge@gmail.com" target="_blank" class="icon">
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </a>
              <a href="mailto:nurruedge@gmail.com" target="_blank">
                <p>Email Us</p>
              </a>
            </div>
            <div class="detail-item whatsapp">
              <a href="https://wa.me/254748236790" target="_blank" class="icon">
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
              </a>
              <a href="https://wa.me/254748236790" target="_blank">
                <p>Chat on WhatsApp</p>
              </a>
            </div>
          </div>
        </div>

        <div v-if="formSubmitted" class="success-message">
          <font-awesome-icon icon="fa-solid fa-check-circle" class="success-icon" />
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully. We'll get back to you soon!</p>
        </div>

        <form @submit.prevent="sendEmail" class="contact-form">
          <!-- Honeypot field -->
          <input type="text" v-model="honeypot" style="display: none" />
          <div class="form-group">
            <label for="name" class="sr-only">Name</label>
            <input type="text" id="name" placeholder="Name" v-model="formData.name" required />
          </div>

          <div class="form-group">
            <label for="email" class="sr-only">Email</label>
            <input type="email" id="email" placeholder="Email" v-model="formData.email" required />
          </div>

          <div class="form-group">
            <label for="message" class="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              rows="5"
              v-model="formData.message"
              required
            ></textarea>
          </div>

          <div v-if="formError" class="error-message">
            {{ formError }}
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading">
            <span v-if="isLoading">
              <font-awesome-icon icon="fa-solid fa-spinner" spin />
              Sending...
            </span>
            <span v-else>Send Message</span>
          </button>
        </form>
      </div>
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
h3 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
h3::after {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: #007bff;
  margin-top: 0.5rem;
}
h3::before {
  content: '';
  display: block;
  width: 50px;
  height: 4px;
  background: #007bff;
  margin-top: 0.5rem;
}
.contact-section {
  padding: 6rem 0;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
}

.location-link p {
  transition: color 0.3s ease;
}

.location-link:hover p {
  color: #3b82f6;
  text-decoration: underline;
}

.contact-info p {
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-details {
  display: grid;
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.detail-item a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: color 0.3s ease;
}
.detail-item a:hover {
  background-color: transparent;
}
.location .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d3436;
  font-size: 1.5rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.location .icon:hover {
  background-color: transparent;
  color: #007bff;
  transform: scale(1.1);
}
.location a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}
.location p {
  margin-left: 0.5rem;
  color: #2d3436;
}
.location p:hover {
  background-color: transparent;
}

.email .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007bff;
  font-size: 1.5rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.email .icon:hover {
  background-color: transparent;
  color: #0056b3;
  transform: scale(1.1);
}
.whatsapp .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #25d366;
  font-size: 1.5rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}
.whatsapp .icon:hover {
  background-color: transparent;
  color: #128c7e;
  transform: scale(1.1);
}
.email a,
.whatsapp a {
  text-decoration: none;
  color: inherit;
  font-weight: 500;
}

.email p,
.whatsapp p {
  margin-left: 0.5rem;
  color: #2d3436;
}

.email p:hover,
.whatsapp p:hover {
  background-color: transparent;
}

.success-message {
  background-color: #f0f9eb;
  border-radius: 5px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.success-icon {
  font-size: 3rem;
  color: #67c23a;
  margin-bottom: 15px;
}

.error-message {
  color: #f56c6c;
  font-size: 0.9rem;
  margin-bottom: 15px;
  padding: 8px;
  background-color: rgba(245, 108, 108, 0.1);
  border-radius: 4px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

input,
textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: 'Jost', sans-serif;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
}

.submit-btn {
  background: #2d3436;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'Jost', sans-serif;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #007bff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .contact-info {
    text-align: center;
  }
  .contact-info h3 {
    font-size: 1.8rem;
  }
  h3::after,
  h3::before {
    width: 30px;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: 1.5rem;
  }
}
</style>
