🪙 Currency Converter

A simple and responsive Currency Converter built with HTML, CSS, and JavaScript.
It fetches live exchange rates from an open API and displays corresponding country flags for each currency.

🚀 Features

🔄 Convert between any two currencies

🌍 Country flags auto-update based on selected currency

📡 Fetches live rates from a public currency API

🧮 Auto-validates amount input

⚡ Fully client-side (no backend)

📱 Responsive UI

📂 Project Structure
currency-converter/
│── index.html
│── style.css
│── script.js
│── countryList.js   (if used)
│── README.md

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

Currency API: fawazahmed0/currency-api

Flags API: flagsapi.com

📦 How to Use

Download or clone this repository:

git clone https://github.com/your-username/currency-converter.git


Open the folder and run the project:

Option 1: Directly open index.html in the browser

Option 2 (recommended): Run using VS Code Live Server

Choose currencies, enter amount, and click Convert.

🔗 API Details
Exchange Rates

Fetched from:

https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies

Flags

Fetched from:

https://flagsapi.com/{COUNTRY_CODE}/flat/64.png


Make sure your countryList object maps:

CURRENCY_CODE → COUNTRY_CODE


Example:

{
  "USD": "US",
  "INR": "IN",
  "EUR": "EU",
  "JPY": "JP"
}

🐞 Common Issues & Fixes
❌ Rate shows undefined or NaN

You must read data like:

data[fromCurrency][toCurrency]

❌ Flags not appearing

Make sure countryList contains correct currency → country mapping.

❌ Dropdown not updating

Ensure <select> elements exist inside .dropdown containers.

🌟 Future Improvements (Optional)

Swap button for switching currencies

Better UI with animations

Dark mode

Cache previous results

Show last updated time

Add currency names instead of codes

📸 Screenshots

(Add your project screenshots here)
Example placeholder:

![App Screenshot](./screenshot.png)

📝 License

This project is open-source and available under the MIT License.

🙌 Contributing

Feel free to fork this repository and submit a pull request.
Improvements and suggestions are welcome!

If you want, I can also generate:
✅ Professional project description for GitHub
✅ Tags & keywords
✅ A logo/banner for your README

Just tell me!
