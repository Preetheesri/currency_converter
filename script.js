// script.js
document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const resultDiv = document.getElementById('result');

    if (amount === '' || isNaN(amount)) {
        resultDiv.innerHTML = 'Please enter a valid amount';
        return;
    }

    const apiKey = 'YOUR_API_KEY_HERE';
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = (amount * rate).toFixed(2);
            resultDiv.innerHTML = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(() => {
            resultDiv.innerHTML = 'Error retrieving exchange rate';
        });
});
