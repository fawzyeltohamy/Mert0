const searchInput = document.getElementById("searchInput");
const searchBox = document.getElementById("searchBox");

searchInput.addEventListener("focus", () => {
  searchBox.classList.add("active");
});

searchInput.addEventListener("blur", () => {
  setTimeout(() => searchBox.classList.remove("active"), 200);
});


// navbar
const homeTrigger = document.getElementById("homeTrigger");
const homeDropdown = document.getElementById("homeDropdown");

homeTrigger.addEventListener("mouseenter", () => {
  homeDropdown.classList.remove("d-none");
});

homeTrigger.addEventListener("mouseleave", () => {
  setTimeout(() => homeDropdown.classList.add("d-none"), 200);
});

homeDropdown.addEventListener("mouseenter", () => {
  homeDropdown.classList.remove("d-none");
});

homeDropdown.addEventListener("mouseleave", () => {
  setTimeout(() => homeDropdown.classList.add("d-none"), 200);
});



// up button 
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});




document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const inputs = this.querySelectorAll("input[required], textarea[required]");

  inputs.forEach(input => {
    const errorDiv = input.nextElementSibling;
    const invalidEmailDiv = input.parentElement.querySelector(".invalid-email");

    // reset messages
    input.classList.remove("is-invalid");
    errorDiv.classList.add("d-none");
    if (invalidEmailDiv) invalidEmailDiv.classList.add("d-none");

    if (!input.value.trim()) {
      input.classList.add("is-invalid");
      errorDiv.classList.remove("d-none");
      isValid = false;
    } else if (input.type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(input.value.trim())) {
        input.classList.add("is-invalid");
        if (invalidEmailDiv) invalidEmailDiv.classList.remove("d-none");
        isValid = false;
      }
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});
