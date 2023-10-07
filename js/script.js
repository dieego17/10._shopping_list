const nuevoalimento = document.getElementById("nuevoalimento");
const list = document.getElementById("list");
const btnaniadir = document.getElementById("btnaniadir");
const btncomprar = document.getElementById("btncomprar");
const error = document.getElementById("error");
const total = document.getElementById("total");

const aniadir = (event) => {

    let element = event.target;
    if(nuevoalimento.value === ""){

        error.textContent = "NO HAS INTRODUCIDO UN ALIMENTO";

    }else{

        let li = document.createElement("LI");
        li.className = "listitem";
        list.appendChild(li);

        let nombre = document.createElement("SPAN");
        nombre.className = "listitem__name";
        nombre.textContent = nuevoalimento.value;
        li.appendChild(nombre);

        let price = document.createElement("SPAN");
        price.className = "listitem__price";
        price.textContent = Math.floor(Math.random() * 99) + ".00€"
        li.appendChild(price); 

        let add = document.createElement("BUTTON");
        add.className = "listbtn__add";
        add.textContent = "+"
        li.appendChild(add);

        let decrease = document.createElement("BUTTON");
        decrease.className = "listbtn__decrease";
        decrease.textContent = "-"
        li.appendChild(decrease);

        let amount = document.createElement("SPAN");
        amount.className = "listitem__amount";
        li.appendChild(amount);

        let borrar = document.createElement("BUTTON");
        borrar.className = "listbtn__delete";
        borrar.textContent = "X"
        li.appendChild(borrar);

        


    }


}

btnaniadir.addEventListener("click", aniadir);
nuevoalimento.focus();

const buy = (event) =>{



}

btncomprar.addEventListener("click", buy)