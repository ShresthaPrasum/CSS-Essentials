// Quiz Data
const quizQuestions = [
  // BEGINNER LEVEL
  {
    id: 1,
    title: "Hover State Styling",
    difficulty: "beginner",
    topic: "Pseudo-Class Selectors",
    description: "Which selector targets an element when the user hovers over it?",
    type: "multiple-choice",
    question: "Select the correct CSS selector for hover state:",
    options: [
      { text: "button:hover { }", correct: true },
      { text: "button.hover { }", correct: false },
      { text: "button#hover { }", correct: false },
      { text: "button:active { }", correct: false },
    ],
    hint: "Pseudo-classes start with a colon (:). The hover pseudo-class applies when the mouse is over the element.",
    explanation: "The :hover pseudo-class applies styles when the user hovers over an element. Use the colon notation, not classes or IDs.",
  },
  {
    id: 2,
    title: "Focus State for Accessibility",
    difficulty: "beginner",
    topic: "Pseudo-Class Selectors",
    description: "Which selector is used to style form elements when they're focused?",
    type: "multiple-choice",
    question: "Which pseudo-class targets focused elements?",
    options: [
      { text: "input:active { }", correct: false },
      { text: "input:focus { }", correct: true },
      { text: "input:hover { }", correct: false },
      { text: "input:visited { }", correct: false },
    ],
    hint: "Focus happens when an element is selected (by clicking or tabbing). It's important for keyboard accessibility.",
    explanation: ":focus applies when an element receives focus, which is crucial for keyboard navigation and accessibility.",
  },
  {
    id: 3,
    title: "First Child Selection",
    difficulty: "beginner",
    topic: "Pseudo-Class Selectors",
    description: "Select only the first list item in a list.",
    type: "multiple-choice",
    question: "How do you select the first child element?",
    options: [
      { text: "li:first { }", correct: false },
      { text: "li:first-child { }", correct: true },
      { text: "li::first-child { }", correct: false },
      { text: "li[first] { }", correct: false },
    ],
    hint: "Pseudo-classes are written with a single colon. :first-child selects the first element of its type.",
    explanation: "Use :first-child pseudo-class to target the first child element. It uses a single colon, not double.",
  },
  {
    id: 4,
    title: "Flexbox Basics",
    difficulty: "beginner",
    topic: "Flexbox Mastery",
    description: "What property creates a flex container?",
    type: "multiple-choice",
    question: "Which property enables flexbox layout?",
    options: [
      { text: "flex: 1;", correct: false },
      { text: "display: flex;", correct: true },
      { text: "flex-layout: true;", correct: false },
      { text: "layout: flex;", correct: false },
    ],
    hint: "The display property is used to create flex containers. Set it to 'flex' to enable flexbox.",
    explanation: "display: flex enables flexbox layout on a container. All its children become flex items.",
  },
  {
    id: 5,
    title: "CSS Grid Creation",
    difficulty: "beginner",
    topic: "CSS Grid Layouts",
    description: "What property creates a grid container?",
    type: "multiple-choice",
    question: "Which property enables CSS Grid layout?",
    options: [
      { text: "display: grid;", correct: true },
      { text: "grid: true;", correct: false },
      { text: "display: layout-grid;", correct: false },
      { text: "grid-layout: true;", correct: false },
    ],
    hint: "Similar to flexbox, CSS Grid is enabled through the display property.",
    explanation: "display: grid enables CSS Grid layout on a container. You can then define columns and rows.",
  },
  {
    id: 6,
    title: "Transition Property",
    difficulty: "beginner",
    topic: "Animations & Transitions",
    description: "Which property smoothly animates CSS property changes?",
    type: "multiple-choice",
    question: "What property creates smooth CSS transitions?",
    options: [
      { text: "animate", correct: false },
      { text: "transform", correct: false },
      { text: "transition", correct: true },
      { text: "motion", correct: false },
    ],
    hint: "Transitions animate property changes over a specified duration. Use the 'transition' property.",
    explanation: "The transition property smoothly animates property changes. You specify the property, duration, and timing function.",
  },
  {
    id: 7,
    title: "CSS Variables Syntax",
    difficulty: "beginner",
    topic: "CSS Variables",
    description: "How do you declare a CSS variable?",
    type: "multiple-choice",
    question: "What is the correct syntax for declaring a CSS variable?",
    options: [
      { text: "$primary: #1e78a8;", correct: false },
      { text: "--primary: #1e78a8;", correct: true },
      { text: "@primary: #1e78a8;", correct: false },
      { text: "#primary: #1e78a8;", correct: false },
    ],
    hint: "CSS variables (custom properties) start with two dashes (--). They must be declared before use.",
    explanation: "CSS variables use the -- prefix. For example: --primary: #1e78a8; in :root or any selector.",
  },
  {
    id: 8,
    title: "Using CSS Variables",
    difficulty: "beginner",
    topic: "CSS Variables",
    description: "How do you use a declared CSS variable?",
    type: "multiple-choice",
    question: "How do you use a CSS variable in your styles?",
    options: [
      { text: "color: $primary;", correct: false },
      { text: "color: --primary;", correct: false },
      { text: "color: var(--primary);", correct: true },
      { text: "color: @primary;", correct: false },
    ],
    hint: "Use the var() function to access CSS variables. The function takes the variable name as argument.",
    explanation: "Use var(--variable-name) to use a CSS variable. You can also provide a fallback: var(--primary, blue);",
  },

  // ADVANCED LEVEL
  {
    id: 9,
    title: "nth-child Selector",
    difficulty: "advanced",
    topic: "Pseudo-Class Selectors",
    description: "Write the selector to style every odd row in a list.",
    type: "code-challenge",
    question: "Write CSS to select every odd list item:",
    starterCode: "/* Style odd items */\nli { }\n\n/* Complete this selector: */\nli: _____ {\n  background: #e0e0e0;\n}",
    correctAnswers: ["nth-child(odd)", "nth-child(2n+1)", "nth-child(2n - 1)", "nth-child(odd)"],
    hint: "Use :nth-child() with either 'odd', 'even', or a formula like '2n+1' or '2n-1'.",
    explanation: "li:nth-child(odd) selects every odd element. You can also use nth-child(2n+1) for the same effect.",
  },
  {
    id: 10,
    title: "Descendant vs Child Combinator",
    difficulty: "advanced",
    topic: "Advanced Selectors",
    description: "What's the difference between '>' and ' ' combinators?",
    type: "multiple-choice",
    question: "Which statement about combinators is correct?",
    options: [
      { text: "'>' targets all descendants; ' ' targets direct children", correct: false },
      { text: "' ' targets all descendants; '>' targets direct children", correct: true },
      { text: "They do the same thing", correct: false },
      { text: "'>' is for classes; ' ' is for elements", correct: false },
    ],
    hint: "The space combinator targets nested elements at any depth. The > combinator only targets direct children.",
    explanation: ".container p selects all p tags inside .container. .container > p selects only direct p children.",
  },
  {
    id: 11,
    title: "Attribute Selectors",
    difficulty: "advanced",
    topic: "Advanced Selectors",
    description: "Select all external links (href starting with https).",
    type: "code-challenge",
    question: "Write the selector for external links (https):",
    starterCode: "/* Select links with https: */\n_____",
    correctAnswers: ['a[href^="https"]', 'a[href ^= "https"]'],
    hint: "Use [attribute^=value] to select elements where the attribute starts with a value.",
    explanation: 'a[href^="https"] selects links where href starts with "https". The ^ means "starts with".',
  },
  {
    id: 12,
    title: "Justify Content vs Align Items",
    difficulty: "advanced",
    topic: "Flexbox Mastery",
    description: "What's the difference between justify-content and align-items?",
    type: "multiple-choice",
    question: "Which describes the correct difference?",
    options: [
      { text: "Both align items horizontally", correct: false },
      { text: "justify-content: main axis, align-items: cross axis", correct: true },
      { text: "align-items always means vertical alignment", correct: false },
      { text: "They're interchangeable", correct: false },
    ],
    hint: "The main axis is determined by flex-direction. justify-content aligns along the main axis.",
    explanation: "justify-content aligns flex items along the main axis (row/column). align-items aligns along the cross axis.",
  },
  {
    id: 13,
    title: "Grid Template Columns",
    difficulty: "advanced",
    topic: "CSS Grid Layouts",
    description: "Create a 3-column grid where the first column is 200px and others are equal.",
    type: "code-challenge",
    question: "Write grid-template-columns for 200px + 2 equal columns:",
    starterCode: "grid-template-columns: _____",
    correctAnswers: ["200px 1fr 1fr", "200px 1fr 1fr", "200px 1fr 1fr"],
    hint: "Use '1fr' for flexible units that share available space equally. '200px' for fixed width.",
    explanation: "grid-template-columns: 200px 1fr 1fr creates a 3-column layout: first is 200px, other two share remaining space.",
  },
  {
    id: 14,
    title: "Keyframes Syntax",
    difficulty: "advanced",
    topic: "Animations & Transitions",
    description: "Write a simple keyframe animation that moves an element.",
    type: "code-challenge",
    question: "Complete the keyframe animation syntax:",
    starterCode: "@keyframes slide {\n  0% { transform: translateX(0); }\n  _____ { transform: translateX(200px); }\n}",
    correctAnswers: ["100%", "100%"],
    hint: "Keyframes use percentages: 0% is the start, 100% is the end. You can add percentages in between for intermediate states.",
    explanation: "@keyframes uses 0%, 50%, 100%, etc. to define animation stages. 100% is the final state.",
  },
  {
    id: 15,
    title: "CSS Variable Scope",
    difficulty: "advanced",
    topic: "CSS Variables",
    description: "Variables in :root are available globally. What about variables in other selectors?",
    type: "multiple-choice",
    question: "What is the scope of a CSS variable defined in a selector?",
    options: [
      { text: "Available everywhere", correct: false },
      { text: "Only in that selector", correct: false },
      { text: "That element and its descendants", correct: true },
      { text: "Previous elements only", correct: false },
    ],
    hint: "CSS variables follow CSS inheritance. A variable is available to the element and all its children.",
    explanation: "Variables defined in a selector are available to that element and all its descendants. Variables defined in :root are global.",
  },
  {
    id: 16,
    title: "Pseudo-elements vs Pseudo-classes",
    difficulty: "advanced",
    topic: "Advanced Selectors",
    description: "What's the difference between :: and :?",
    type: "multiple-choice",
    question: "What's the key difference between :: and :?",
    options: [
      { text: "No difference; they're the same", correct: false },
      { text: ": is pseudo-class; :: is pseudo-element", correct: true },
      { text: ":: is older; : is newer", correct: false },
      { text: ":: is for classes; : is for IDs", correct: false },
    ],
    hint: "Pseudo-classes select based on state (:hover). Pseudo-elements create virtual elements (::before).",
    explanation: "Pseudo-classes use : and target elements based on state. Pseudo-elements use :: and create virtual elements.",
  },

  // PROFESSIONAL LEVEL
  {
    id: 17,
    title: "CSS Specificity Calculation",
    difficulty: "professional",
    topic: "Advanced Selectors",
    description: "Calculate the specificity of this selector: #header .nav li:hover",
    type: "multiple-choice",
    question: "What is the specificity of '#header .nav li:hover'?",
    options: [
      { text: "0-1-2-1", correct: true },
      { text: "0-1-1-1", correct: false },
      { text: "1-0-1-1", correct: false },
      { text: "0-2-1-0", correct: false },
    ],
    hint: "Specificity: IDs (100) + Classes (10) + Elements (1). #header(100) + .nav(10) + li(1) + :hover(10) = 0-1-2-1",
    explanation: "Specificity = [IDs][Classes+Pseudo-classes][Elements]. #header(100) .nav(10) li(1) :hover(10) = 121 = 0-1-2-1",
  },
  {
    id: 18,
    title: "Grid Auto-fit vs Auto-fill",
    difficulty: "professional",
    topic: "CSS Grid Layouts",
    description: "Explain the difference between auto-fit and auto-fill in grid templates.",
    type: "multiple-choice",
    question: "What's the difference between auto-fit and auto-fill?",
    options: [
      { text: "No difference; they're identical", correct: false },
      { text: "auto-fill: empty tracks; auto-fit: collapses them", correct: true },
      { text: "auto-fit is for rows; auto-fill is for columns", correct: false },
      { text: "auto-fit is newer; auto-fill is deprecated", correct: false },
    ],
    hint: "auto-fill creates empty tracks even when there's no content. auto-fit collapses empty tracks.",
    explanation: "repeat(auto-fill, minmax(200px, 1fr)) creates empty tracks. auto-fit collapses them for a tighter layout.",
  },
  {
    id: 19,
    title: "Complex Flex Shorthand",
    difficulty: "professional",
    topic: "Flexbox Mastery",
    description: "What does 'flex: 1 1 0' mean?",
    type: "multiple-choice",
    question: "What does the shorthand 'flex: 1 1 0' specify?",
    options: [
      { text: "grow: 1, shrink: 1, basis: 0", correct: true },
      { text: "grow: 1, basis: 1, shrink: 0", correct: false },
      { text: "width: 1, height: 1, flex: 0", correct: false },
      { text: "flex: 1, margin: 1, padding: 0", correct: false },
    ],
    hint: "flex shorthand: flex: [grow] [shrink] [basis]. So 1 1 0 means grow 1, shrink 1, basis 0.",
    explanation: "flex: 1 1 0 is shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0. Items grow equally and shrink proportionally.",
  },
  {
    id: 20,
    title: "Animation Performance",
    difficulty: "professional",
    topic: "Animations & Transitions",
    description: "Which property animates best on the GPU?",
    type: "multiple-choice",
    question: "Which properties are GPU-accelerated for best performance?",
    options: [
      { text: "width, height, position", correct: false },
      { text: "transform, opacity", correct: true },
      { text: "color, font-size", correct: false },
      { text: "margin, padding", correct: false },
    ],
    hint: "transform and opacity don't trigger layout recalculations. They run on the GPU for smooth 60fps animations.",
    explanation: "transform and opacity are GPU-accelerated and don't cause repaints. Avoid animating width/height which trigger reflows.",
  },
  {
    id: 21,
    title: "CSS Variable with calc()",
    difficulty: "professional",
    topic: "CSS Variables",
    description: "Use CSS variables with calc() to create responsive spacing.",
    type: "code-challenge",
    question: "Write CSS to use a variable with calc():",
    starterCode: ":root {\n  --base-spacing: 1rem;\n}\n\n.element {\n  padding: _____\n}",
    correctAnswers: ["calc(var(--base-spacing) * 2)", "calc(var(--base-spacing)*2)"],
    hint: "You can use calc() with CSS variables to perform mathematical operations.",
    explanation: "calc(var(--base-spacing) * 2) multiplies the variable value by 2. Variables work inside calc().",
  },
  {
    id: 22,
    title: "Grid Template Areas",
    difficulty: "professional",
    topic: "CSS Grid Layouts",
    description: "Create a responsive layout using grid-template-areas.",
    type: "code-challenge",
    question: "Complete the grid template areas for a layout:",
    starterCode: "grid-template-areas:\n  \"_____ _____\"\n  \"sidebar main\"\n  \"footer footer\";",
    correctAnswers: ["header header", "header header"],
    hint: "grid-template-areas uses strings to define named areas. Matching names span multiple cells. Use 'header header' for a full-width header.",
    explanation: "grid-template-areas: \"header header\" \"sidebar main\" creates a 2-column layout with a full-width header.",
  },
  {
    id: 23,
    title: "Animation Staggering",
    difficulty: "professional",
    topic: "Animations & Transitions",
    description: "How do you stagger animations for multiple elements?",
    type: "multiple-choice",
    question: "What property staggeres animations for multiple elements?",
    options: [
      { text: "animation-order", correct: false },
      { text: "animation-delay", correct: true },
      { text: "animation-spacing", correct: false },
      { text: "animation-sequence", correct: false },
    ],
    hint: "animation-delay starts the animation after a specified time. Different delays for each element create a staggered effect.",
    explanation: "Use animation-delay with different values for each element. Example: li:nth-child(1) { animation-delay: 0s; }",
  },
  {
    id: 24,
    title: "Browser Prefixes for Transform",
    difficulty: "professional",
    topic: "Animations & Transitions",
    description: "Write transforms with browser prefixes for older browsers.",
    type: "code-challenge",
    question: "Write transform with all necessary prefixes:",
    starterCode: ".element {\n  _____: rotate(45deg);\n}",
    correctAnswers: [
      "transform",
      "-webkit-transform",
      "-webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  transform",
    ],
    hint: "Use -webkit- for Chrome/Safari and -moz- for Firefox for older browser support. Always include the unprefixed version last.",
    explanation: "For compatibility: -webkit-transform, -moz-transform, then transform (unprefixed). Modern browsers support unprefixed version.",
  },
];

// Render quiz
function renderQuiz(difficulty = "all") {
  const container = document.getElementById("quiz-container");
  const filtered =
    difficulty === "all"
      ? quizQuestions
      : quizQuestions.filter((q) => q.difficulty === difficulty);

  container.innerHTML = filtered
    .map((question) => createQuestionHTML(question))
    .join("");

  // Add event listeners
  setupQuizListeners();
  loadProgress();
}

function createQuestionHTML(question) {
  const completed = isQuestionCompleted(question.id);
  const cardClass = completed ? "completed" : "";

  let contentHTML = "";

  if (question.type === "multiple-choice") {
    contentHTML = `
      <div class="question-text">${question.question}</div>
      <div class="options-group" id="options-${question.id}">
        ${question.options
          .map(
            (option, idx) => `
          <label class="option">
            <input type="radio" name="question-${question.id}" value="${idx}" />
            <span>${option.text}</span>
          </label>
        `
          )
          .join("")}
      </div>
    `;
  } else if (question.type === "code-challenge") {
    contentHTML = `
      <div class="question-text">${question.question}</div>
      <div class="code-input-wrapper">
        <label for="code-${question.id}">Your Answer:</label>
        <textarea class="code-input" id="code-${question.id}" placeholder="Type your answer here...">${
      question.starterCode || ""
    }</textarea>
      </div>
    `;
  }

  return `
    <div class="question-card ${cardClass}" id="question-${question.id}">
      <div class="question-header">
        <div>
          <h3 class="question-title">${question.title}</h3>
          <p class="question-description">${question.description}</p>
        </div>
        <div class="question-meta">
          <span class="difficulty-badge ${question.difficulty}">${question.difficulty}</span>
          <span class="topic-tag">${question.topic}</span>
          ${
            completed
              ? '<span class="completion-badge">✓ Completed</span>'
              : ""
          }
        </div>
      </div>
      
      <div class="question-content">
        ${contentHTML}
      </div>

      <div class="hint-box" id="hint-${question.id}">
        <h4>💡 Hint</h4>
        <p>${question.hint}</p>
      </div>

      <div class="feedback" id="feedback-${question.id}">
        <div class="feedback-title"></div>
        <p class="feedback-text"></p>
        <p class="feedback-explanation"></p>
      </div>

      <div class="question-actions">
        <button class="btn-submit" onclick="submitQuestion(${question.id})">Submit Answer</button>
        <button class="btn-reset" onclick="resetQuestion(${question.id})">Reset</button>
        <button class="btn-hint" onclick="toggleHint(${question.id})">Too Difficult? Show Hint</button>
      </div>
    </div>
  `;
}

function submitQuestion(questionId) {
  const question = quizQuestions.find((q) => q.id === questionId);
  const card = document.getElementById(`question-${questionId}`);
  const feedback = document.getElementById(`feedback-${questionId}`);

  let isCorrect = false;

  if (question.type === "multiple-choice") {
    const selected = document.querySelector(
      `input[name="question-${questionId}"]:checked`
    );
    if (!selected) {
      showFeedback(questionId, false, "Please select an answer.");
      return;
    }

    const selectedIdx = parseInt(selected.value);
    isCorrect = question.options[selectedIdx].correct;

    if (isCorrect) {
      markOptions(questionId, selectedIdx);
    }
  } else if (question.type === "code-challenge") {
    const input = document.getElementById(`code-${questionId}`).value.trim();
    isCorrect = question.correctAnswers.some((ans) => {
      return input.toLowerCase().includes(ans.toLowerCase());
    });
  }

  if (isCorrect) {
    card.classList.add("completed");
    card.classList.remove("incorrect");
    showFeedback(questionId, true, "Correct! Well done!", question.explanation);
    markQuestionCompleted(questionId);
    updateStats();
  } else {
    card.classList.add("incorrect");
    card.classList.remove("completed");
    showFeedback(
      questionId,
      false,
      "Not quite right. Try again or click 'Show Hint'.",
      question.explanation
    );
  }
}

function markOptions(questionId, selectedIdx) {
  const question = quizQuestions.find((q) => q.id === questionId);
  const options = document.querySelectorAll(`#options-${questionId} .option`);

  options.forEach((option, idx) => {
    option.classList.remove("selected");

    if (idx === selectedIdx) {
      option.classList.add("selected");
      if (question.options[idx].correct) {
        option.classList.add("correct");
      } else {
        option.classList.add("incorrect");
      }
    } else if (question.options[idx].correct) {
      option.classList.add("correct");
    }

    option.querySelector("input").disabled = true;
  });
}

function showFeedback(questionId, isSuccess, message, explanation = "") {
  const feedback = document.getElementById(`feedback-${questionId}`);
  feedback.classList.add("show");
  feedback.classList.toggle("success", isSuccess);
  feedback.classList.toggle("error", !isSuccess);

  feedback.querySelector(".feedback-title").textContent = isSuccess
    ? "✓ Correct!"
    : "✗ Incorrect";
  feedback.querySelector(".feedback-text").textContent = message;
  feedback.querySelector(".feedback-explanation").textContent = explanation
    ? `Explanation: ${explanation}`
    : "";
}

function toggleHint(questionId) {
  const hintBox = document.getElementById(`hint-${questionId}`);
  hintBox.classList.toggle("show");
}

function resetQuestion(questionId) {
  const card = document.getElementById(`question-${questionId}`);
  const feedback = document.getElementById(`feedback-${questionId}`);

  card.classList.remove("completed", "incorrect");
  feedback.classList.remove("show");

  const inputs = card.querySelectorAll("input");
  inputs.forEach((input) => {
    input.checked = false;
    input.disabled = false;
  });

  const textarea = card.querySelector("textarea");
  if (textarea) {
    textarea.value = quizQuestions.find((q) => q.id === questionId).starterCode || "";
  }

  const options = card.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("selected", "correct", "incorrect");
  });
}

function setupQuizListeners() {
  document.querySelectorAll(".diff-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".diff-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const difficulty = btn.dataset.difficulty;
      renderQuiz(difficulty);
    });
  });
}

// Progress tracking
function markQuestionCompleted(questionId) {
  let completed = JSON.parse(localStorage.getItem("completedQuestions") || "[]");
  if (!completed.includes(questionId)) {
    completed.push(questionId);
    localStorage.setItem("completedQuestions", JSON.stringify(completed));
  }
}

function isQuestionCompleted(questionId) {
  const completed = JSON.parse(localStorage.getItem("completedQuestions") || "[]");
  return completed.includes(questionId);
}

function loadProgress() {
  const completed = JSON.parse(localStorage.getItem("completedQuestions") || "[]");
  const total = quizQuestions.length;
  const percentage = Math.round((completed.length / total) * 100);

  document.getElementById("completed").textContent = completed.length;
  document.getElementById("score").textContent = `${percentage}%`;

  // Calculate streak
  let streak = 0;
  const sortedCompleted = completed.sort((a, b) => a - b);
  for (let i = 0; i < sortedCompleted.length; i++) {
    if (i === 0 || sortedCompleted[i] === sortedCompleted[i - 1] + 1) {
      streak = i + 1;
    } else {
      streak = 1;
    }
  }
  document.getElementById("streak").textContent = streak;
}

function updateStats() {
  loadProgress();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
});
