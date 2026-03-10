// ============================================
// JUTA CONSULTING LMS - MAIN JAVASCRIPT
// Simple, Low Maintenance
// ============================================

// Menu Toggle for Mobile
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      nav.classList.remove('active');
    });
  });
});

// ============================================
// FORM HANDLING
// ============================================

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      showError('Please enter both email and password');
      return;
    }

    // Simulate form submission
    const submitBtn = loginForm.querySelector('button');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';

    setTimeout(() => {
      window.location.href = 'onboarding.html';
    }, 500);
  });
}

// Onboarding Form
const onboardingForm = document.getElementById('onboardingForm');
if (onboardingForm) {
  onboardingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    if (!firstName || !lastName || !email) {
      showError('Please fill in all required fields');
      return;
    }

    // Save user data to localStorage
    const userData = {
      firstName,
      lastName,
      email,
      organisation: document.getElementById('organisation').value,
      role: document.getElementById('role').value,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Submit form
    const submitBtn = onboardingForm.querySelector('button');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    setTimeout(() => {
      window.location.href = 'modules.html';
    }, 500);
  });
}

// Assessment Form
const assessmentForm = document.getElementById('assessmentForm');
if (assessmentForm) {
  assessmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate assessment submission
    const submitBtn = assessmentForm.querySelector('button');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    setTimeout(() => {
      showSuccess('Assessment submitted successfully!');
      setTimeout(() => {
        window.location.href = 'modules.html';
      }, 1500);
    }, 500);
  });
}

// ============================================
// UTILITIES
// ============================================

function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message fade-in';
  errorDiv.textContent = message;

  const form = document.querySelector('form');
  if (form) {
    form.insertBefore(errorDiv, form.firstChild);

    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
}

function showSuccess(message) {
  const successDiv = document.createElement('div');
  successDiv.style.cssText = `
    background-color: #dcfce7;
    border: 1px solid #86efac;
    color: #166534;
    padding: 1rem;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    animation: fadeIn 0.3s ease-out;
  `;
  successDiv.textContent = message;

  const form = document.querySelector('form');
  if (form) {
    form.insertBefore(successDiv, form.firstChild);

    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }
}

// ============================================
// LOGOUT FUNCTIONALITY
// ============================================

const logoutBtn = document.querySelector('.logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('userData');
    window.location.href = 'index.html';
  });
}

// ============================================
// USER DATA DISPLAY
// ============================================

function loadUserData() {
  const userData = localStorage.getItem('userData');
  if (userData) {
    const user = JSON.parse(userData);
    const userGreeting = document.getElementById('userGreeting');
    if (userGreeting) {
      userGreeting.textContent = `${user.firstName} ${user.lastName}`;
    }
  }
}

// Load user data on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadUserData);
} else {
  loadUserData();
}

// ============================================
// MODULES DATA
// ============================================

const modulesData = [
  {
    id: 1,
    title: 'Introduction to the LMS',
    description:
      'Overview of the Juta Training LMS and how learners will navigate the platform. Get familiar with all the essential features.',
    icon: '📚',
    duration: '2-3 hours',
    status: 'available',
    participants: 24,
  },
  {
    id: 2,
    title: 'Using Juta Training Content',
    description:
      'Learn how to access and use Juta training materials within the LMS. Master content navigation and resources.',
    icon: '👥',
    duration: '3-4 hours',
    status: 'available',
    participants: 18,
  },
  {
    id: 3,
    title: 'Assessments and Reporting',
    description:
      'Understand assessments, monitoring learner progress, and basic reporting concepts to track your development.',
    icon: '📊',
    duration: '2 hours',
    status: 'available',
    participants: 12,
  },
];

function renderModules() {
  const modulesContainer = document.getElementById('modulesContainer');
  if (!modulesContainer) return;

  modulesContainer.innerHTML = modulesData
    .map(
      (module) => `
    <div class="module-card">
      <div class="module-header">
        <div class="module-icon">${module.icon}</div>
        <div class="badge badge-${getStatusClass(module.status)}">
          ${getStatusLabel(module.status)}
        </div>
      </div>
      <div class="module-body">
        <h3 class="module-title">${module.title}</h3>
        <p class="module-description">${module.description}</p>
        <div class="module-meta">
          <div class="module-meta-item">
            <span>⏱️ ${module.duration}</span>
          </div>
          <div class="module-meta-item">
            <span>👥 ${module.participants} participants enrolled</span>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary" onclick="window.location.href='assessment.html'">
          Take Assessment →
        </button>
      </div>
    </div>
  `
    )
    .join('');
}

function getStatusClass(status) {
  switch (status) {
    case 'completed':
      return 'success';
    case 'in-progress':
      return 'info';
    default:
      return 'default';
  }
}

function getStatusLabel(status) {
  switch (status) {
    case 'completed':
      return '✓ Completed';
    case 'in-progress':
      return 'In Progress';
    default:
      return 'Available';
  }
}

// Render modules on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderModules);
} else {
  renderModules();
}

// ============================================
// ICONS (Simple emoji-based)
// ============================================

const iconMap = {
  book: '📚',
  users: '👥',
  chart: '📊',
  clock: '⏱️',
  checkCircle: '✓',
  alertTriangle: '⚠️',
  lightbulb: '💡',
};
