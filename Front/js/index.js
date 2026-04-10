const forms = document.querySelectorAll("form");
const NomUsuari = document.querySelector("#InputForm");
const TextUsuari = document.querySelector("#InputFormDades");
const SubmitFormDades = document.querySelector("#SubmitFormDades");
let count = 0; 

/*
console.log(NomUsuari);
console.log(TextUsuari);
*/

TextUsuari.addEventListener("input", () => {
    
    //console.log(TextUsuari.value)
    console.log("escrivint en textarea");
    count += 1 ;
    console.log(count);
    
});

SubmitFormDades.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(NomUsuari.value , "\n" , TextUsuari.value);
    count += 10 ;
    console.log(count);
})

NomUsuari.addEventListener("input", (event) => {
    event.preventDefault();
    console.log("input del nom");
    count += 100 ;
    console.log(count);
});




/*
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', () => {
console.log('Content changed:', textarea.value);
});
*/