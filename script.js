const base_url ="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}";

const dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
    for(let currcodes in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currcodes;
        newoption.value = currcodes;
        select.append(newoption);
    }
}