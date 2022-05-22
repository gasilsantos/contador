let numero = 0;

function decrement(){
    numero = numero + 1 
    mostrarNatela()
}

function increment(){
    numero = numero - 1
    mostrarNatela()
}

function mostrarNatela(){
    const p = document.querySelector("p")
    p.innerText = numero
}

mostrarNatela()