export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateContactForm(data: {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
  honeypot?: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot check
  if (data.honeypot) {
    return { isValid: false, errors: { form: 'Invalid submission' } };
  }

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.organization || data.organization.trim().length < 2) {
    errors.organization = 'Organization is required';
  }

  if (!data.topic) {
    errors.topic = 'Please select a topic';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}


