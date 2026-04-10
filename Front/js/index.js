const forms = document.querySelectorAll("form");
const NomUsuari = document.querySelector("#InputForm");
const TextUsuari = document.querySelector("#InputFormDades");
const SubmitFormDades = document.querySelector("#SubmitFormDades");

console.log(count);

var count = 1;

/*
console.log(NomUsuari);
console.log(TextUsuari);
*/

TextUsuari.addEventListener("input", (event) => {
    event.preventDefault();
    //console.log(TextUsuari.value)
    console.log("escrivint en textarea");
    count += 1
});

SubmitFormDades.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(NomUsuari.value , "\n" , TextUsuari.value);
    count += 10
})

NomUsuari.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit del boto");
    console.log("escrivint en textarea");
    count += 100
});




/*
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', () => {
console.log('Content changed:', textarea.value);
});
*/