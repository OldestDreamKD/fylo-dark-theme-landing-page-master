const svgTest = document.querySelector(
  "#icon-arrow > g > g > use:nth-child(2)"
);
const linksa = document.querySelector(".cta-content a");
const emailInput = document.querySelector("input");
const emialBtn = document.querySelector(".email-input button");
const errorMsg = document.querySelector(".email-input");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function verify() {
  var inputValue = emailInput.value;

  if (emailRegex.test(emailInput.value)) {
    alert("Signup successful!");
    window.location.reload();
  } else {
    errorMsg.classList.add("error-msg");
  }
}

function changeStyle() {
  linksa.classList.add("hover-state");
  svgTest.classList.add("hover-state");
}
function returnStyle() {
  linksa.classList.remove("hover-state");
  svgTest.classList.remove("hover-state");
}
