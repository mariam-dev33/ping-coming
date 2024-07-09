const input = document.querySelector(".input");
const btn = document.querySelector(".email-form .btn");
const error = document.querySelector(".error");
console.log(error);

btn.addEventListener("click", function () {
  console.log(input.value);
  if (input.value === "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

// btn.style.fontSize = "60px";
// btn.style.backgroundColor = "green";

// input.style.border = "2px solid red";
