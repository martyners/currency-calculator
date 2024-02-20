{

  const calculateResalt = (amount, currency) => {
    const resultElement = document.querySelector(".js-result");
    const exchangeRate = currency === "EUR" ? 4.3 : 4.01;
    const result = (amount / exchangeRate).toFixed(2);
    
    resultElement.innerText = result;
  }

  const onSubmit = (event) => {
    const currencyElement = document.querySelector(".js-currency");
    const currency = currencyElement.value;
    const amountElement = document.querySelector(".js-amount");
    const amount = amountElement.value;

    event.preventDefault();  
    calculateResalt(amount, currency);
  };
  
  
  const initCurrencyConverter = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onSubmit);
  };
  
  initCurrencyConverter();
}