{

    const calculateAmount = (amount, currency) => {
        const rateEUR = 4.56;
        const rateUSD = 3.77;

        switch (currency) {
            case "EUR":
                return (amount / rateEUR);
            case "USD":
                return (amount / rateUSD);
        };
    };

    const course = () => {
        const courseDay = document.querySelector(".js-courseDay");
        courseDay.innerText = "Kurs z dnia 25 kwietnia, 06:06 UTC"
    };

    const updateResultText = (currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result} ${currency}`
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currenyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");
        const currency = currenyElement.value;
        const amount = +amountElement.value;

        const result = (calculateAmount(amount, currency)).toFixed(2);
        course();
        updateResultText(currency, result);
    };

    const init = () => {
        const buttonElement = document.querySelector(".js-button");
        buttonElement.addEventListener("click", onFormSubmit);
    };

    init();
}