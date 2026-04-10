const forms = document.querySelectorAll("form");
const NomUsuari = document.querySelector("#InputForm");
const TextUsuari = document.querySelector("#InputFormDades");
const SubmitFormDades = document.querySelector("#SubmitFormDades");
const lCount = document.querySelector("#longCount"); // label de count de caracters del textarea
let count = 0; 

/*
console.log(NomUsuari);
console.log(TextUsuari);
*/
NomUsuari.addEventListener("input", (event) => {
    event.preventDefault();
    console.log("input del nom");
    count += 100 ;
    console.log("Count: ", count);
});



TextUsuari.addEventListener("input", () => {
    
    //console.log(TextUsuari.value)
    console.log("escrivint en textarea");
    count += 1 ;
    console.log("Count: ",count ,"long:" , TextUsuari.value.length , "/250" );
    lCount.textContent=`${TextUsuari.value.length}/250` ;
});

SubmitFormDades.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log(NomUsuari.value , "\n" , TextUsuari.value);
    count += 10 ;
    console.log("Enviant dades\nCount: " ,count );
});


/*
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', () => {
console.log('Content changed:', textarea.value);
});
*/