// let allDivEdit = document.getElementsByTagName("div");
// let textEdit = document.getElementsByClassName("textEdit");

// /* prenom */
// let prenom = document.getElementById("prenom");

// // let divEditPrenom = allDivEdit[0];

// // let textEditPrenom = textEdit[0];

// // function editModePrenom() {
// //     divEditPrenom.style.display = "flex";
// // }

// // function okClosePrenom() {
// //     prenom.textContent = textEditPrenom.value;
// //     divEditPrenom.style.display = "none";
// // }

// /* nom */
// let nom = document.getElementById("nom");

// // let divEditNom = allDivEdit[1];

// // let textEditNom = textEdit[1];

// // function editModeNom() {
// //     divEditNom.style.display = "flex";
// // }

// // function okCloseNom() {
// //     nom.textContent = textEditNom.value;
// //     divEditNom.style.display = "none";
// // }

// /* date */
// let date = document.getElementById("date");

// // let divEditDate = allDivEdit[2];

// // let textEditDate = textEdit[2];

// // function editModeDate() {
// //     divEditDate.style.display = "flex";
// // }

// // function okCloseDate() {
// //     date.textContent = textEditDate.value;
// //     divEditDate.style.display = "none";
// // }

// /* adresse */
// let adresse = document.getElementById("adresse");

// // let divEditAdresse = allDivEdit[3];

// // let textEditAdresse = textEdit[3];

// // function editModeAdresse() {
// //     divEditAdresse.style.display = "flex";
// // }

// // function okCloseAdresse() {
// //     adresse.textContent = textEditAdresse.value;
// //     divEditAdresse.style.display = "none";
// // }

// /* numero */
// let numero = document.getElementById("numero");

// // let divEditNumero = allDivEdit[4];

// // let textEditNumero = textEdit[4];

// // function editModeNumero() {
// //     divEditNumero.style.display = "flex";
// // }

// // function okCloseNumero() {
// //     numero.textContent = textEditNumero.value;
// //     divEditNumero.style.display = "none";
// // }

// /* email */
// let email = document.getElementById("email");

// // let divEditEmail = allDivEdit[5];

// // let textEditEmail = textEdit[5];

// // function editModeEmail() {
// //     divEditEmail.style.display = "flex";
// // }

// // function okCloseEmail() {
// //     email.textContent = textEditEmail.value;
// //     divEditEmail.style.display = "none";
// // }

// /* activites */
// let activites = document.getElementById("activites");

// // let divEditActivites = allDivEdit[6];

// // let textEditActivites = textEdit[6];

// // function editModeActivites() {
// //     divEditActivites.style.display = "flex";
// // }

// // function okCloseActivites() {
// //     activites.textContent = textEditActivites.value;
// //     divEditActivites.style.display = "none";
// // }

// /* metier */
// let metier = document.getElementById("metier");

// // let divEditMetier = allDivEdit[7];

// // let textEditMetier = textEdit[7];

// // function editModeMetier() {
// //     divEditMetier.style.display = "flex";
// // }

// // function okCloseMetier() {
// //     metier.textContent = textEditMetier.value;
// //     divEditMetier.style.display = "none";
// // }

function okClose(n, t) {
    // Je récupère un élément HTML dans la liste initiale
    let el = document.getElementsByTagName("div")[n];
    // Afficher les résultats dans la console
    console.log(el, t);
    // Test sur la valeur display de l'élément HTML récupéré
    if (el.style.display == 'flex') {
        // Identification de la balise de texte si utile
        if (t) {
            let tmp = document.getElementById(t);
            console.log(tmp);
            // Changement de la valeur du dit texte
            tmp.textContent = document.getElementsByClassName("textEdit")[n].value;
        }
        el.style.display = 'none';
    } else {
        el.style.display = 'flex';
    }
}

/* okClose(el){} 
okClose(document.getElementByTagName()[0]) 
okClose(el){ el.style.display = 'flex'; } 
let allDivEdit = document.getElementsByTagName("div"); 
let divEditPrenom = allDivEdit[0]; 
okClose(document.getElementsByTagName("div")[0]) 
okClose(allDivEdit[0])  */