const passwordInput = document.querySelector(".password-field input");
const eyeIcon = document.querySelector(".password-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding
// regular expressions and index of the requirement list item
const requirements = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
  { regex: /[A-Z]/, index: 1 }, // At least one uppercase letter
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[0-9]/, index: 3 }, // At least one number
  { regex: /[^A-Za-z0-9]/, index: 4 }, // At least one special character
];

passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach((item) => {
    // Check if the password matches the requirement regex
    const isValid = item.regex.test(e.target.value);
    const requirementItem = requirementList[item.index];

    // Updating class and icon of requirement item if requirement matched or not
    if (isValid) {
      requirementItem.classList.add("valid");
      requirementItem.classList.remove("invalid");
      requirementItem.firstElementChild.className = "fa-solid fa-circle-check";
    } else {
      requirementItem.classList.remove("valid");
      requirementItem.classList.add("invalid");
      requirementItem.firstElementChild.className = "fa-solid fa-circle-xmark";
    }
  });
});

// Reset styles when input value is cleared
passwordInput.addEventListener("keyup", () => {
  if (passwordInput.value === "") {
    requirementList.forEach((item) => {
      item.classList.remove("valid");
      item.classList.remove("invalid");
      item.style.color = "black"; // Reset text color to black
    });
  }
});

eyeIcon.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";

  // Update the eye icon class based on the password input type
  eyeIcon.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
