<script setup lang="ts">
import { ref } from 'vue'

/*
 * ContactForm
 * Sends recruiter messages to the serverless contact endpoint
 * and provides clear loading, success, timeout and error feedback.
 */

const name = ref('')
const email = ref('')
const company = ref('')
const message = ref('')

// Hidden honeypot field used to catch simple spambots.
// Real users will never see or interact with this field.
const website = ref('')

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  // Prevent the form from hanging forever if the API does not respond.
  const controller = new AbortController()
  const timeout = window.setTimeout(() => {
    controller.abort()
  }, 10000)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim(),
        company: company.value.trim(),
        message: message.value.trim(),
        website: website.value,
      }),
    })

    /*
     * Read the body as text first.
     * This avoids "Unexpected end of JSON input" if the server
     * returns an empty response or a non-JSON error page.
     */
    const responseText = await response.text()

    let data: { message?: string } = {}

    if (responseText) {
      try {
        data = JSON.parse(responseText)
      } catch {
        data = {}
      }
    }

    if (!response.ok) {
      throw new Error(
        data.message ||
          `Unable to send message. Server returned ${response.status}.`,
      )
    }

    successMessage.value =
      data.message || 'Message sent successfully. I’ll get back to you soon.'

    // Clear the visible form fields after a successful submission.
    name.value = ''
    email.value = ''
    company.value = ''
    message.value = ''
    website.value = ''
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      errorMessage.value =
        'The request timed out. Please try again or email me directly.'
    } else {
      errorMessage.value =
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
    }
  } finally {
    window.clearTimeout(timeout)
    isSubmitting.value = false
  }
}
</script>

<template>
  <form
    class="contact-form"
    @submit.prevent="submitForm"
  >
    <!--
      Hidden anti-spam field.
      Humans never see it, but simple bots may fill it automatically.
    -->
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
          placeholder="Your name"
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
          placeholder="you@company.com"
          required
        />
      </div>
    </div>

    <div class="field">
      <label for="company">
        Company
        <span class="optional">Optional</span>
      </label>

      <input
        id="company"
        v-model="company"
        type="text"
        autocomplete="organization"
        placeholder="Company name"
      />
    </div>

    <div class="field">
      <label for="message">Message</label>

      <textarea
        id="message"
        v-model="message"
        rows="6"
        placeholder="Tell me about the opportunity..."
        required
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>

    <!-- Screen-reader-friendly submission feedback -->
    <p
      v-if="successMessage"
      class="form-status success"
      role="status"
      aria-live="polite"
    >
      {{ successMessage }}
    </p>

    <p
      v-if="errorMessage"
      class="form-status error"
      role="alert"
      aria-live="assertive"
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

.optional {
  margin-left: 5px;
  color: #63717d;
  font-size: 0.68rem;
  font-weight: 400;
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

  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
}

input::placeholder,
textarea::placeholder {
  color: #53606b;
}

input:focus,
textarea:focus {
  border-color: #2dd4bf;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.08);
}

textarea {
  resize: vertical;
  min-height: 150px;
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

  transition:
    filter 160ms ease,
    transform 160ms ease,
    opacity 160ms ease;
}

button:hover:not(:disabled) {
  filter: brightness(1.06);
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.form-status {
  margin: 0;

  padding: 10px 12px;

  border-radius: 6px;

  font-size: 0.82rem;
  line-height: 1.5;
}

.success {
  color: #5eead4;

  background: rgba(45, 212, 191, 0.07);
  border: 1px solid rgba(45, 212, 191, 0.18);
}

.error {
  color: #fca5a5;

  background: rgba(252, 165, 165, 0.06);
  border: 1px solid rgba(252, 165, 165, 0.16);
}

@media (max-width: 600px) {
  .contact-form {
    padding: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  button {
    width: 100%;
  }
}
</style>