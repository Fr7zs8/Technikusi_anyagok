import { toggleFormVisibility, handleFormSubmit, fetchAndRenderCars } from "./functions.js";

const url = "http://localhost:3000/api/auto";

document.getElementById("addCarBtn").addEventListener("click", toggleFormVisibility);
document.getElementById("carForm").addEventListener("submit", handleFormSubmit);

fetchAndRenderCars(url);