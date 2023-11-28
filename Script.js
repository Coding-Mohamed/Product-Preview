const nextElement = document.getElementById("next");
const errorElement = document.querySelector(".error");
const formenelement = document.querySelector("#info");
const inputElement = document.querySelector(".input");

nextElement.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputElement.value == "") {
    errorElement.style.display = "block";

    setTimeout(() => {
      errorElement.style.display = "none";
    }, 5000);
  } else {
    cartElement.style.display = "none";
  }
});
