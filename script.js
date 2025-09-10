// Theme Toggle

const themeToggle = document.getElementById("theme-toggle");

const html = document.documentElement;

// Check saved theme in localStorage

if (localStorage.getItem("theme") === "light") {

  html.classList.add("light");

  themeToggle.textContent = "🌙";

} else {

  themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

  html.classList.toggle("light");

  if (html.classList.contains("light")) {

    localStorage.setItem("theme", "light");

    themeToggle.textContent = "🌙";

  } else {

    localStorage.setItem("theme", "dark");

    themeToggle.textContent = "☀️";

  }

});

// Contact Form (Dummy handler)

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thanks for reaching out! Your message has been recorded ✅");

    form.reset();

  });

}