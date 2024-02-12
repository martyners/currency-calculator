let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let currency = currencyElement.value;
  let amount = amountElement.value;

  let result = currency === "EUR" ? amount / 4.3 : amount / 4.01;
  resultElement.innerText = result.toFixed(2);
});
