// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let btnAns = document.getElementById("button")
let answer = document.getElementById("answer")
let input = document.getElementById("input")

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

btnAns.addEventListener("click", function(){
    if (input.value.length <= 3) {
        window.alert('Ingresa una preguna valida')
    } else {
    fetch (API_ENDPOINT, {
        method: 'GET',
        })
        .then(response => response.json())
        .then(data => answer.innerHTML = data.answer);
    }
 
});
//onkeypress="handleKeyEnter(event)" value="" required