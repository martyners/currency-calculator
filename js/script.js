{
  const initCurrencyConverter = () => {
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");
  
    const onSubmit = (event) => {
      event.preventDefault();
      
      const currency = currencyElement.value;
      const amount = amountElement.value;
  
      const exchangeRate = currency === "EUR" ? 4.3 : 4.01;
      const result = (amount / exchangeRate).toFixed(2);
  
      resultElement.innerText = result;
    };
  
    formElement.addEventListener("submit", onSubmit);
  };
  
  initCurrencyConverter();
}