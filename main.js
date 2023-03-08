//---------------------------------------------------------declaro variables--------------------
let numSeleccionado = null;
let fichaSeleccionada = null;

let errores = 0;

let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

let solucion = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

//--------------------------------------------------------FUNCIONES-------------------------------------------

function setGame() {
//-------------------------------------------- creo los dígitos  del 1 al 9--------------
    for (let i = 1; i <= 9; i++) {
//------------------------------------<div id="1" class="numbero">1</div>
        let numero = document.createElement('div');
        numero.id = i;
        numero.innerText = i;
        numero.classList.add('numero');
        document.getElementById('digitos').appendChild(numero);
    }
//------------------------------------imprimo el tablero----------------------------------

for (let r = 0; r < 9; r++) {

    for (let c = 0; c < 9; c++) {

        let ficha = document.createElement("div");
        ficha.id = r.toString() + "-" + c.toString();
        ficha.classList.add("ficha");
        document.getElementById("tablero").append(ficha);
    }
  }
};


//------------------------------------------------------------------------------------------------------------

window.onload = function() {
    setGame()
};