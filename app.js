// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//verAmigos()

function agregarAmigo(){
    let amigoInsertado = document.getElementById('amigo').value;
    console.log(amigoInsertado)

    if (amigoInsertado == ""){
        alert("Por favor inserte un nombre")
    } else {
        amigos.push(amigoInsertado);
        document.getElementById('amigo').value = "";
        console.log(amigos)
    };
    verAmigos()
};

function verAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (i = 0; i <= amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    };
    console.log(lista);
};

function sortearAmigo(){
    if (amigos != ""){
        let ganador = document.getElementById('resultado');
        ganador.innerHTML = ""

        let sorteo =  Math.floor(Math.random() * amigos.length)
        ganador.textContent = amigos[sorteo]
        return;
        
    } else [
        alert("Ingresa un nombre")
    ]
};



let nombreAmigo = document.querySelector("#amigo imput")
    if (nombreAmigo){
        soloLetras(value)
    }else {
        console.error("No se encontro error")
    }



function soloLetras(text, maxLength){
    if (text.includes("  ")){
        return false;
    }
    if (text.length > 0){
        if(text.substring(text.length-1,text.length) != "." && text.substring(text.length-1,text.length) != " " && !(/^[a-zA-Z]*$/.test(text.substring(text.length-1,text.length)))){
            return false;            
        }
    }
    return true;
};


/////////////////////////////////////

/*let lista = document.querySelector("listaAmigos")
let nuevoAmigo = document.createElement("li");
nuevoAmigo.textContent = amigos
lista.append(nuevoAmigo)*/