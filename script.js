const feedDisplay = document.querySelector("#feed");

const hamburgerBtn = document.querySelector(".hamburger-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

fetch("https://veggie-me-api-production.up.railway.app/restaurants")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching restaurants");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((rest) => {
      const restaurant = `<div>
        <h3>${rest.name}</h3>
        <p>City: ${rest.city}</p>
        <p>Cuisine: ${rest.cuisine}</p>
        <p>Rating: ${rest.rating}</p>
        <p>Review Count: ${rest.reviewCount}</p>
        <a href="${rest.link}" target="_blank">Website</a>
      </div>`;
      feedDisplay.insertAdjacentHTML("beforeend", restaurant);
    });
  })
  .catch((err) => {
    const errorMessage = `<p> Oh No! There is an Error: ${err.message} </p>`;
    feedDisplay.insertAdjacentHTML("beforeend", errorMessage);
  });

/* hamburgerBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
}); */

const loadingText = document.getElementById("loadingText");

loadingText.textContent =
  "Finding the best restaurants in Amsterdam, Stockholm, Paris...";

setTimeout(() => {
  loadingText.textContent = "Barcelona, London, Berlin...";
}, 1500);

setTimeout(() => {
  loadingText.textContent = "";
}, 2900);
