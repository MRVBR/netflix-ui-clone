// ================= FAQ ACCORDION =================
const accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    const icon = this.querySelector("i");
    const content = this.nextElementSibling;

    // Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-times");

    // Toggle accordion animation
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// ================= EMAIL CAPTURE =================
const primaryButtons = document.querySelectorAll(".primary__button");

primaryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const emailInput = btn
      .closest(".email__form__container")
      ?.querySelector(".email__input");

    if (!emailInput) return;

    const email = emailInput.value.trim();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    localStorage.setItem("netflix_email", email);
     alert("Email saved successfully! Redirecting to login...");
     window.location.href = "browse.html";
  });
});

// ================= AUTH / NAVBAR STATE =================
const signInBtn = document.querySelector(".signin__button");

function updateNavbar() {
  const loggedIn = localStorage.getItem("netflix_logged_in");
  signInBtn.textContent = loggedIn ? "Logout" : "Sign in";
}

// ================= SIGN IN / LOG OUT =================
signInBtn.addEventListener("click", () => {
  const loggedIn = localStorage.getItem("netflix_logged_in");

  if (loggedIn) {
    localStorage.removeItem("netflix_logged_in");
    alert("Logged out successfully");
  } else {
    const email = localStorage.getItem("netflix_email");
    if (!email) {
      alert("Please enter your email first");
      return;
    }
    localStorage.setItem("netflix_logged_in", "true");
    alert("Logged in successfully");
  }

  updateNavbar();
});

// ================= INITIAL LOAD =================
updateNavbar();
