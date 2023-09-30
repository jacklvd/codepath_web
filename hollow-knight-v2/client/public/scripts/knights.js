const renderKnights = async () => {
  const response = await fetch("/knights");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");

  if (data) {
    data.map((knight) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const topContainer = document.createElement("div");
      topContainer.classList.add("top-container");

      const bottomContainer = document.createElement("div");
      bottomContainer.classList.add("bottom-container");

      topContainer.style.backgroundImage = `url(${knight.image})`;

      const name = document.createElement("h3");
      name.textContent = knight.name;
      bottomContainer.appendChild(name);

      const link = document.createElement("a");
      link.textContent = "Read More >";
      link.setAttribute("role", "button");
      link.href = `/knights/${knight.id}`;
      bottomContainer.appendChild(link);

      card.appendChild(topContainer);
      card.appendChild(bottomContainer);

      mainContent.appendChild(card);
    });
  } else {
    const message = document.createElement("h2");
    message.classList.add("message");
    message.textContent = "No Knights Here 😞";
    mainContent.appendChild(message);
  }
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl === "knights") {
  window.location.href = "/";
} else if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderKnights();
}
