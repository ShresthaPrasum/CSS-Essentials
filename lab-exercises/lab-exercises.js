// Lab Exercises Data
const labExercises = [
  {
    id: 1,
    title: "Ball Bouncing Animation",
    difficulty: "beginner",
    topic: "Animations & Transitions",
    description: "Create a smooth bouncing ball animation using CSS keyframes.",
    objectives: [
      "Learn keyframe animation syntax",
      "Practice transform and scale properties",
      "Understand animation timing functions",
      "Create realistic physics-based motion",
    ],
    requirements: [
      "Ball bounces from top to bottom",
      "Uses CSS keyframes (not JavaScript)",
      "Smooth easing function (ease-in-out)",
      "Infinite animation loop",
    ],
    tips: [
      "Use @keyframes to define animation stages",
      "0% and 100% represent start and end",
      "50% represents the midpoint (bottom)",
      "ease-in-out creates realistic deceleration",
    ],
  },
  {
    id: 2,
    title: "Responsive CSS Grid Layout",
    difficulty: "beginner",
    topic: "CSS Grid Layouts",
    description: "Build a responsive website layout using CSS Grid with header, sidebar, and footer.",
    objectives: [
      "Learn CSS Grid basics",
      "Create responsive grid templates",
      "Use grid-template-areas for layout",
      "Practice auto-fit and minmax()",
    ],
    requirements: [
      "Header spans full width",
      "Sidebar on left (optional on mobile)",
      "Main content area",
      "Footer spans full width",
      "Responsive on mobile devices",
    ],
    tips: [
      "grid-template-areas makes layout semantic",
      "Use variable names that match content",
      "Use media queries for responsive behavior",
      "Combine with minmax() for flexible sizing",
    ],
  },
  {
    id: 3,
    title: "Flexbox Navigation Menu",
    difficulty: "intermediate",
    topic: "Flexbox Mastery",
    description: "Create a flexible navigation menu that adapts to different screen sizes.",
    objectives: [
      "Master flex-grow and flex-shrink",
      "Create responsive navigation",
      "Practice justify-content and align-items",
      "Build dropdown menus with flexbox",
    ],
    requirements: [
      "Horizontal menu on desktop",
      "Mobile-friendly hamburger alternative",
      "Responsive spacing",
      "Smooth transitions on hover",
    ],
    tips: [
      "Use justify-content: space-between for layout",
      "flex: 1 makes items grow equally",
      "align-items: center vertically centers items",
      "gap property adds consistent spacing",
    ],
  },
  {
    id: 4,
    title: "Animated Button States",
    difficulty: "intermediate",
    topic: "Animations & Transitions",
    description: "Create button animations for hover, active, and disabled states.",
    objectives: [
      "Combine transitions and transforms",
      "Create smooth state changes",
      "Practice animation-delay",
      "Build visual feedback systems",
    ],
    requirements: [
      "Smooth color transitions",
      "Hover scale transform",
      "Active state feedback",
      "Disabled state styling",
    ],
    tips: [
      "Use transition for smooth state changes",
      "Combine transform for depth effect",
      "Add box-shadow for visual lift",
      "Keep transitions under 300ms for responsiveness",
    ],
  },
  {
    id: 5,
    title: "Gradient Card Layout",
    difficulty: "intermediate",
    topic: "Flexbox Mastery",
    description: "Build a responsive card grid with gradient backgrounds and hover effects.",
    objectives: [
      "Create card layouts with flexbox",
      "Practice gradient backgrounds",
      "Build hover interactions",
      "Create responsive grids",
    ],
    requirements: [
      "3+ cards with gradient backgrounds",
      "Hover scale and shadow effects",
      "Responsive multi-column layout",
      "Content properly centered",
    ],
    tips: [
      "Use linear-gradient for smooth color transitions",
      "Combine scale() and box-shadow for depth",
      "auto-fit creates flexible responsive layouts",
      "nth-child() allows different styling per card",
    ],
  },
  {
    id: 6,
    title: "CSS Variables Theme System",
    difficulty: "advanced",
    topic: "CSS Variables",
    description: "Build a theme switching system using CSS variables.",
    objectives: [
      "Master CSS variable scoping",
      "Create theme systems",
      "Practice dynamic color switching",
      "Build JavaScript integration",
    ],
    requirements: [
      "Light and dark theme modes",
      "All colors use CSS variables",
      "Toggle button to switch themes",
      "Theme preference saved in localStorage",
    ],
    tips: [
      "CSS variables are inherited through the DOM",
      "Use data attributes to switch theme scope",
      "Combine with JavaScript for user preferences",
      "localStorage persists theme choice",
    ],
  },
  {
    id: 7,
    title: "Advanced Selector Challenge",
    difficulty: "advanced",
    topic: "Advanced Selectors",
    description: "Master complex selectors with attribute selectors and combinators.",
    objectives: [
      "Learn attribute selectors",
      "Practice combinator syntax",
      "Create specific selectors",
      "Avoid specificity issues",
    ],
    requirements: [
      "Target elements without classes/ids",
      "Use attribute selectors correctly",
      "Combine multiple selectors",
      "Avoid !important usage",
    ],
    tips: [
      "[type=email] targets specific input types",
      ":focus for interactive feedback",
      ":invalid for form validation styling",
      "Combine selectors for specific targeting",
    ],
  },
  {
    id: 8,
    title: "Responsive Typography Scale",
    difficulty: "advanced",
    topic: "CSS Variables",
    description: "Build a typography system using CSS variables and responsive sizing.",
    objectives: [
      "Create scalable type systems",
      "Use calc() with variables",
      "Practice fluid typography",
      "Build design tokens",
    ],
    requirements: [
      "Multiple font sizes via variables",
      "Responsive scaling with clamp()",
      "Consistent line-height ratios",
      "Accessible contrast ratios",
    ],
    tips: [
      "clamp(min, preferred, max) creates fluid scaling",
      "Use calc() to create mathematical relationships",
      "CSS variables make system updates easy",
      "Maintain consistent line-height for readability",
    ],
  },
];

// Render lab exercises
function renderLabExercises(difficulty = "all") {
  const container = document.getElementById("lab-exercises-container");
  const filtered =
    difficulty === "all"
      ? labExercises
      : labExercises.filter((ex) => ex.difficulty === difficulty);

  container.innerHTML = filtered
    .map((exercise) => createLabCardHTML(exercise))
    .join("");

  setupEventListeners();
  updateStats();
}

function createLabCardHTML(exercise) {
  const completed = isLabCompleted(exercise.id);
  const completedClass = completed ? "completed" : "";

  return `
    <div class="lab-card ${completedClass}" id="lab-${exercise.id}">
      <div class="lab-card-header">
        <h3 class="lab-card-title">${exercise.title}</h3>
        <p class="lab-card-topic">${exercise.topic}</p>
        <span class="lab-card-difficulty ${exercise.difficulty}">${exercise.difficulty}</span>
      </div>
      
      <div class="lab-card-body">
        <p class="lab-card-description">${exercise.description}</p>
        
        <div class="lab-details-section">
          <h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-primary);">Learning Objectives</h4>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${exercise.objectives.map((obj) => `<li style="color: var(--text-secondary); margin-bottom: 0.4rem; padding-left: 1.25rem; position: relative;"><span style="position: absolute; left: 0; color: var(--primary); font-weight: 600;">→</span>${obj}</li>`).join("")}
          </ul>
        </div>

        <div class="lab-details-section">
          <h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem; font-weight: 600; color: var(--text-primary);">Requirements</h4>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${exercise.requirements.map((req) => `<li style="color: var(--text-secondary); margin-bottom: 0.4rem; padding-left: 1.25rem; position: relative;"><span style="position: absolute; left: 0; color: var(--primary); font-weight: 600;">✓</span>${req}</li>`).join("")}
          </ul>
        </div>

        <div class="lab-hint-section" id="hint-${exercise.id}" style="display: none; margin-top: 1.5rem; padding: 1rem; background: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 0.25rem;">
          <h4 style="margin: 0 0 0.5rem 0; color: #92400e; font-weight: 600;">💡 Hints & Tips</h4>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${exercise.tips.map((tip) => `<li style="color: #92400e; margin-bottom: 0.3rem; padding-left: 1.25rem; position: relative;"><span style="position: absolute; left: 0;">•</span>${tip}</li>`).join("")}
          </ul>
        </div>
      </div>
      
      <div class="lab-card-footer">
        <button class="btn-hint" onclick="toggleHint(${exercise.id})">Show Hints</button>
      </div>
    </div>
  `;
}

function toggleHint(exerciseId) {
  const hintSection = document.getElementById(`hint-${exerciseId}`);
  const btn = event.target;
  if (hintSection.style.display === "none") {
    hintSection.style.display = "block";
    btn.textContent = "Hide Hints";
    btn.classList.add("active");
  } else {
    hintSection.style.display = "none";
    btn.textContent = "Show Hints";
    btn.classList.remove("active");
  }
}

function setupEventListeners() {
  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderLabExercises(btn.dataset.difficulty);
    });
  });
}

// Progress tracking
function isLabCompleted(labId) {
  const completed = JSON.parse(localStorage.getItem("completedLabs") || "[]");
  return completed.includes(labId);
}

function markLabCompleted(labId) {
  let completed = JSON.parse(localStorage.getItem("completedLabs") || "[]");
  if (!completed.includes(labId)) {
    completed.push(labId);
    localStorage.setItem("completedLabs", JSON.stringify(completed));
    updateStats();
  }
}

function updateStats() {
  const completed = JSON.parse(localStorage.getItem("completedLabs") || "[]");
  const total = labExercises.length;
  const percentage = Math.round((completed.length / total) * 100);

  document.getElementById("completed").textContent = completed.length;
  document.getElementById("total").textContent = total;
  document.getElementById("progress").textContent = `${percentage}%`;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderLabExercises();
  setupEventListeners();
});
