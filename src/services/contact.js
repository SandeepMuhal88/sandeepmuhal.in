const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(form) {
  const trimmed = Object.fromEntries(
    Object.entries(form).map(([key, value]) => [key, value.trim()]),
  )

  if (Object.values(trimmed).some(value => !value)) {
    return {
      values: trimmed,
      error: 'Please complete all fields before sending your message.',
    }
  }

  if (!EMAIL_PATTERN.test(trimmed.email)) {
    return {
      values: trimmed,
      error: 'Please enter a valid email address.',
    }
  }

  return { values: trimmed, error: null }
}

export function createContactMailtoUrl(email, { name, email: senderEmail, subject, message }) {
  const params = new URLSearchParams({
    subject,
    body: `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`,
  })

  return `mailto:${email}?${params.toString()}`
}
