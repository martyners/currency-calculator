// let formElement = document.querySelector(".js-form");  form jeśli zamiast button.addEnevt bylby formElemnt na submit
let buttonElement = document.querySelector(".js-button");
let resultElement = document.querySelector(".js-result");
let amountElement = document.querySelector(".js-amount");
let currenyElement = document.querySelector(".js-currency");
let courseDay = document.querySelector(".js-courseDay");


buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    courseDay.innerText = "Kurs z dnia 25 kwietnia, 06:06 UTC";
    let amount;

    switch (currenyElement.value) {
        case "EUR":
            amount = (amountElement.value / 4.56).toFixed(2);
            break;
        case "USD":
            amount = (amountElement.value / 3.77).toFixed(2);
            break;
    };
    resultElement.innerText = `${amount} ${currenyElement.value}`;
});