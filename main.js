class Tablero {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;

    this.crearTablero();
  }

  crearTablero() {
    const tableroAlto = new Array(this.alto);
    for (let i = 0; i < tableroAlto.length; i += 1) {
      tableroAlto[i] = new Array(this.ancho);

      for (let j = 0; j < tableroAlto[i].length; j++) {
        
        let estadoCelula = Math.round(Math.random())

        tableroAlto[i][j] = estadoCelula;
        
      }


    }
    // return tableroAlto;

    this.imprimirTablero(tableroAlto);
  }

  imprimirTablero(tableroAlto) {
    
    for (let i=0; i < tableroAlto.length; i++){
        var linea = tableroAlto[i].toString();
        console.log(linea.replace(/,/g," "))
    }
        

  }

  
}

const tablero = new Tablero(4, 8);
console.log(tablero);
