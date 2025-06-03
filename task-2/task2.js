// Show relevant section based on nav click
function showSection(sectionId, btn) {
  const sections = document.querySelectorAll(".section");
  const buttons = document.querySelectorAll(".nav-btn");

  sections.forEach((section) => section.classList.add("hidden"));
  buttons.forEach((button) => button.classList.remove("active"));

  document.getElementById(sectionId).classList.remove("hidden");
  btn.classList.add("active");
}

// Contact form validation
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("All fields are required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
  });

// To-do functionality
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  const btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
