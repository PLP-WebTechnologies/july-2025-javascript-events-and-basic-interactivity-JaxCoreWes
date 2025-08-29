//  Part 1: Event Handling 
// Toggle hidden message when button is clicked
const toggleBtn = document.getElementById("toggleMessageBtn");
const hiddenMessage = document.getElementById("hiddenMessage");

toggleBtn.addEventListener("click", () => {
  hiddenMessage.style.display =
    hiddenMessage.style.display === "none" ? "block" : "none";
});

// Part 2a: Light/Dark Mode 
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Part 2b: Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");

counterBtn.addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

// Part 2c: FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// Part 2d: Dropdown Menu (Extra Feature)
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownResult = document.getElementById("dropdownResult");

// Show/Hide dropdown menu
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Add click event for each option
dropdownMenu.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    dropdownResult.textContent = `✅ You selected: ${item.textContent}`;
    dropdownMenu.style.display = "none"; // close after selection
  });
});

//  Part 3: Form Validation
const form = document.getElementById("signupForm");
const messages = document.getElementById("formMessages");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop refresh
  messages.innerHTML = ""; // clear previous messages

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Validate Name
  if (name.length < 2) {
    errors.push("⚠️ Name must be at least 2 characters.");
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("⚠️ Please enter a valid email address.");
  }

  // Validate Password
  if (password.length < 6) {
    errors.push("⚠️ Password must be at least 6 characters.");
  }

  // Show results
  if (errors.length > 0) {
    messages.style.color = "red";
    messages.innerHTML = errors.join("<br>");
  } else {
    messages.style.color = "green";
    messages.innerHTML = "🎉 Success! Welcome to the club.";
    form.reset();
  }
});
