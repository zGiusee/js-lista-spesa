
// CREO L'ARRAY CHE CONTENGA GLI INGREDIENTI
const list = ["Uova", "Precorino", "Guanciale", "Pepe", "Pasta"];

// INDICO LA LISTA NEL FILE HTML
const list_container = document.getElementById("lista_della_spesa");

let i = 0;

// ESEGUO IL CICLO CHE MOSTRI NEL DOCUMENTO HTML I COMPONENTI DELL'ARRAY
// while(i < list.length){

//     let li = `<li>${list[i]}</li>`;

//     list_container.innerHTML += li;

//     i++;

// }

// VERSIONE CON APPENCHILD
while(i < list.length){

    let li = document.createElement("li");
    li.innerText = list[i];

    list_container.appendChild(li);

    i++;
}


