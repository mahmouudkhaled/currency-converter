let dollar = document.getElementById("dollar");
let pound = document.getElementById("pound");
let input = document.querySelectorAll("input");

// From USD
dollar.onkeyup = () => {
  pound.value = dollar.value * 18.87;
};

dollar.onfocus = function () {
  dollar.style.boxShadow = "0px 0px 5px 1px #099393";
  dollar.style.outline = "none";
};

dollar.onblur = function () {
  dollar.style.outline = "none";
  dollar.style.boxShadow = "none";
};

// From EGP
pound.onkeyup = () => {
  dollar.value = pound.value / 18.87;
};

pound.onfocus = function () {
  pound.style.boxShadow = "0px 0px 5px 1px #099393";
  pound.style.outline = "none";
};

pound.onblur = function () {
  pound.style.outline = "none";
  pound.style.boxShadow = "none";
};

if (localStorage.length > 0) {
  document.body.style.background = localStorage.color;
}

function setColor(color) {
  localStorage.setItem("color", color);
  document.body.style.background = color;
}
