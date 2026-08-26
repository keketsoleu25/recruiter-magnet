<script setup lang="ts">
import { ref } from 'vue'

/*
 * ContactForm
 * Lightweight recruiter contact form.
 * Submission handling will be connected to a serverless email endpoint.
 */

const name = ref('')
const email = ref('')
const company = ref('')
const message = ref('')

const submitForm = () => {
  console.log({
    name: name.value,
    email: email.value,
    company: company.value,
    message: message.value,
  })
}
</script>

<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <div class="form-row">
      <div class="field">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          autocomplete="name"
          required
        />
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          autocomplete="email"
          required
        />
      </div>
    </div>

    <div class="field">
      <label for="company">Company</label>
      <input
        id="company"
        v-model="company"
        type="text"
        autocomplete="organization"
      />
    </div>

    <div class="field">
      <label for="message">Message</label>
      <textarea
        id="message"
        v-model="message"
        rows="6"
        required
      ></textarea>
    </div>

    <button type="submit">
      Send Message
    </button>
  </form>
</template>

<style scoped>
.contact-form {
  display: grid;
  gap: 18px;

  padding: 26px;

  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: grid;
  gap: 7px;
}

label {
  color: #aab5bf;
  font-size: 0.78rem;
}

input,
textarea {
  width: 100%;

  padding: 12px 13px;

  color: #f4f7fa;
  background: #070d12;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;

  outline: none;
  font: inherit;

  transition: border-color 160ms ease;
}

input:focus,
textarea:focus {
  border-color: #2dd4bf;
}

textarea {
  resize: vertical;
}

button {
  width: fit-content;

  padding: 12px 20px;

  color: #03110f;
  background: #2dd4bf;

  border: 0;
  border-radius: 6px;

  font-weight: 700;
  cursor: pointer;
}

button:hover {
  filter: brightness(1.05);
}

@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }

  button {
    width: 100%;
  }
}
</style>