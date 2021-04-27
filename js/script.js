// let formElement = document.querySelector(".js-form");  form jeśli zamiast button.addEnevt bylby formElemnt na submit
let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");
let currenyElement = document.querySelector(".js-currency");
let courseDay = document.querySelector(".js-courseDay");


buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    courseDay.innerText = "Kurs z dnia 25 kwietnia, 06:06 UTC";
    switch (currenyElement.value) {
        case "EUR":
            resultElement.innerText = (amountElement.value / 4.56).toFixed(2) + " euro ";
            break;
        case "USD":
            resultElement.innerText = (amountElement.value / 3.77).toFixed(2) + " dolarów";
            break;
    };
});