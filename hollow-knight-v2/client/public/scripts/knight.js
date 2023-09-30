const renderKnight = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/knights");
  const data = await response.json();

  const knightContent = document.getElementById("knight-content");

  let knight;

  knight = data.find((knight) => knight.id === requestedID);

  if (knight) {
    document.getElementById("image").src = knight.image;
    document.getElementById("name").textContent = knight.name;
    document.getElementById("health").textContent =
      "Heath Point: " + knight.health;
    document.getElementById("location").textContent =
      "Location: " + knight.location;
    document.getElementById("description").textContent = knight.description;
    document.title = `HKnight - ${knight.name}`;
  } else {
    const message = document.createElement("h2");
    message.classList.add("message");
    message.textContent = "No Knight Here 😞";
    knightContent.appendChild(message);
  }
};

renderKnight();
