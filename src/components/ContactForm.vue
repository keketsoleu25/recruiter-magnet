<script setup lang="ts">
import { ref } from 'vue'

/*
 * ContactForm
 * Sends recruiter messages to the serverless contact endpoint
 * and provides loading, success and error feedback.
 */

const name = ref('')
const email = ref('')
const company = ref('')
const message = ref('')

// Honeypot field used to catch basic spambots.
// Real users will never see or interact with this field.
const website = ref('')

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        company: company.value,
        message: message.value,
        website: website.value,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Unable to send message.')
    }

    successMessage.value =
      'Message sent successfully. I’ll get back to you soon.'

    name.value = ''
    email.value = ''
    company.value = ''
    message.value = ''
    website.value = ''
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form
    class="contact-form"
    @submit.prevent="submitForm"
  >
    <!-- Hidden anti-spam field -->
    <div
      class="honeypot"
      aria-hidden="true"
    >
      <label for="website">Website</label>

      <input
        id="website"
        v-model="website"
        type="text"
        tabindex="-1"
        autocomplete="off"
      />
    </div>

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

    <button
      type="submit"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>

    <p
      v-if="successMessage"
      class="form-status success"
      role="status"
    >
      {{ successMessage }}
    </p>

    <p
      v-if="errorMessage"
      class="form-status error"
      role="alert"
    >
      {{ errorMessage }}
    </p>
  </form>
</template>

<style scoped>
.contact-form {
  position: relative;

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

button:hover:not(:disabled) {
  filter: brightness(1.05);
}

button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.honeypot {
  position: absolute;
  left: -9999px;
}

.form-status {
  margin: 0;
  font-size: 0.82rem;
}

.success {
  color: #5eead4;
}

.error {
  color: #fca5a5;
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