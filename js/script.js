const nuevoalimento = document.getElementById("nuevoalimento");
const list = document.getElementById("list");
const btnaniadir = document.getElementById("btnaniadir");
const btncomprar = document.getElementById("btncomprar");
const error = document.getElementById("error");
const total = document.getElementById("total");

const aniadir = (event) => {

    let element = event.target;
    let precioTotal = Math.floor(Math.random() * 99);
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
        price.textContent = precioTotal + ".00€";
        li.appendChild(price); 
        total.textContent = precioTotal ;
        

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
        let num = 1;
        amount.textContent = num
        li.appendChild(amount);

        let borrar = document.createElement("BUTTON");
        borrar.className = "listbtn__delete";
        borrar.textContent = "X"
        li.appendChild(borrar);

        list.addEventListener("click", (event) =>{

            let element = event.target;
            let suma;
            if(element.textContent === "+"){
                num++;
                amount.textContent = num;

                total.textContent = price.textContent;
            }else if(element.textContent === "-"){
                if(num > 1){
                    num--;
                    amount.textContent = num;
                }
            }
            if(element.textContent === "X"){
                li.remove()
                total.textContent = "0";

            }
        })
    }
}

btnaniadir.addEventListener("click", aniadir);
nuevoalimento.focus();


btncomprar.addEventListener("click", (event) => {
    location.reload();
});
