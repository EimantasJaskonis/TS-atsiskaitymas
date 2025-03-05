"use strict";
/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const meterInput = document.querySelector("#meter");
    const unitSelect = document.querySelector("#search");
    const outputDiv = document.querySelector("#output");
    const submitBtn = document.querySelector("#submit-btn");
    function convertLength() {
        const meters = parseFloat(meterInput.value);
        if (isNaN(meters)) {
            outputDiv.innerHTML = "<p>Please enter a valid number</p>";
            return;
        }
        const conversions = {
            centimeters: meters * 100,
            inches: meters * 39.37,
            feet: meters * 3.281,
            miles: meters / 1609,
            yards: meters * 1.094,
        };
        const selectedUnit = unitSelect.value;
        const convertedValue = conversions[selectedUnit];
        outputDiv.innerHTML = `
        <p><strong>${meters} meters is equal to:</strong></p>
        <p>${convertedValue.toFixed(6)} ${selectedUnit}</p>
      `;
    }
    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        convertLength();
    });
});
