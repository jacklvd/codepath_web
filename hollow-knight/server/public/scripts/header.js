// // Header creation

// Helper function to handle scroll and update parallax effect
const handleScroll = () => {
  const scrollY = window.scrollY;
  const translateY = scrollY * 0.5; // Adjust the parallax effect by changing this value
  headerContainer.style.backgroundPositionY = `${translateY}px`;
};

// Header creation
const header = document.querySelector("header");

const headerContainer = document.createElement("div");
headerContainer.className = "header-container";

const headerSemiBox = document.createElement("div");
headerSemiBox.className = "header-semi-box";

const headerTitle = document.createElement("h1");
headerTitle.textContent = "Hollow Knight";

const headerDescription = document.createElement("p");
headerDescription.textContent = "A hollow knight fears nothing! 😱";

const headerButton = document.createElement("button");
headerButton.textContent = "VIEW BOSSES";
headerButton.setAttribute("role", "button");
headerButton.setAttribute("aria-busy", "true");
headerButton.addEventListener("click", () => {
  window.location = "/";
});

headerSemiBox.appendChild(headerTitle);
headerSemiBox.appendChild(headerDescription);
headerSemiBox.appendChild(headerButton);

headerContainer.appendChild(headerSemiBox);
header.appendChild(headerContainer);

// Attach scroll event listener for the parallax effect
window.addEventListener("scroll", handleScroll);
