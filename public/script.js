// Login form interaction
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Form submit handler
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let errors = [];

    // Email validation
    if (!emailInput.value || !emailInput.value.includes('@')) {
      errors.push('Please enter a valid email address');
    }

    // Password validation
    if (!passwordInput.value) {
      errors.push('Please enter your password');
    }

    if (errors.length > 0) {
      // Show error feedback
      const errorContainer = document.createElement('div');
      errorContainer.className = 'error-feedback';
      errorContainer.textContent = errors.join('. ');
      
      // Remove existing error feedback
      const existing = loginForm.querySelector('.error-feedback');
      if (existing) existing.remove();
      
      loginForm.insertBefore(errorContainer, loginForm.firstElementChild);
      return;
    }

    // Simulate successful login
    alert('Sign in successful! Welcome to your dashboard.');
    // In a real app, would submit form data to auth endpoint
  });

  // Input validation feedback
  [emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', function() {
      const errorFeedback = this.closest('.form-group').querySelector('.error-feedback');
      if (errorFeedback) {
        errorFeedback.remove();
      }
    });
  });

  // Password show/hide toggle
  const passwordContainer = passwordInput.parentElement;
  const showToggle = document.createElement('button');
  showToggle.type = 'button';
  showToggle.textContent = 'visibility';
  showToggle.style.cssText = 'position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; padding: 0.25rem;';
  
  showToggle.addEventListener('click', function() {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    this.textContent = isPassword ? 'visibility_off' : 'visibility';
  });
  
  passwordContainer.style.position = 'relative';
  passwordContainer.appendChild(showToggle);
});