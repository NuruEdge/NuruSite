<script setup></script>

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
              <a href="https://goo.gl/maps/4v5x6Z1g7kE2" class="icon">
                <font-awesome-icon icon="fa-solid fa-map-marker-alt" />
              </a>
              <a href="https://goo.gl/maps/4v5x6Z1g7kE2">
                <p>Location: Nairobi, Kenya</p>
              </a>
            </div>
            <div class="detail-item email">
              <a href="mailto:nurruedge@gmail.com" class="icon">
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </a>
              <a href="mailto:nurruedge@gmail.com">
                <p>Email Us</p>
              </a>
            </div>
            <div class="detail-item whatsapp">
              <a href="https://wa.me/254748236790" class="icon">
                <font-awesome-icon icon="fa-brands fa-whatsapp" />
              </a>
              <a href="https://wa.me/254748236790">
                <p>Chat on WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
        <form class="contact-form">
          <div class="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
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
