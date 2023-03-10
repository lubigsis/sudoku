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
        numero.addEventListener('click', selectNumero);
        numero.classList.add('numero');
        document.getElementById('digitos').appendChild(numero);
    }

//------------con CSS
function selectNumero(){
    if(numSeleccionado != null){
        numSeleccionado.classList.remove('selectNumero');
    }
    numSeleccionado = this;
    numSeleccionado.classList.add('selectNumero');
}

//------------función para q' se imprima en número en el tablero

function selectFicha(){
    if(numSeleccionado){
        //para q' no se sobreescriba el nro. en el tablero.
        if(this.innerText != ''){
            return;
        }
        //compruebo coordenadas para ver si acertó: "0-0" "0-1"... "3-1"
        let coords = this.id.split('-'); // ["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if(solucion[r][c] == numSeleccionado.id){
            this.innerText = numSeleccionado.id;
        }
        else{
            errores += 1;
            document.getElementById('errores').innerText = errores;
        }
    }
}

//------------------------------------imprimo el tablero----------------------------------

for (let r = 0; r < 9; r++) {

    for (let c = 0; c < 9; c++) {

        let ficha = document.createElement("div");
        ficha.id = r.toString() + "-" + c.toString();
        if(board[r][c] != '-'){
            ficha.innerText = board[r][c]; //imprime todos los nros. en el tablero excepto los guiones.
            ficha.classList.add('ficha-start');
        }
        if(r == 2 || r == 5){
            ficha.classList.add('horizontal-line');  //CSS -> líneas que subdividen al tablero.
        }
        if(c == 2 || c == 5){
            ficha.classList.add('vertical-line');
        }
        
        ficha.addEventListener('click', selectFicha);
        ficha.classList.add("ficha");
        document.getElementById("tablero").append(ficha);
    }
  }
};


//------------------------------------------------------------------------------------------------------------

window.onload = function() {
    setGame()
};