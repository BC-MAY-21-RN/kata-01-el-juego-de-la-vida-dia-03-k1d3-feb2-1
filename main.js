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

    //return tableroAlto;

    // console.log(this.imprimirTablero(tableroAlto));
    // console.log(this.imprimirTablero(tableroAlto).length);
  }

  imprimirTablero(tableroAlto) {
      
    let linea = '';
    // var conteo = 0;

    // console.log(tableroAlto.length);
    for (let i=0; i < tableroAlto.length; i++){
        // conteo += tableroAlto[i].lenght;
        linea += tableroAlto[i].toString();

        /* importante */
        // console.log(linea.replace(/,/g," "));

        linea = linea.replace(/,/g,"");
    }
    return linea;
    //console.log(linea);
  }  
}

const tablero = new Tablero(4, 8);
 //console.log(tablero);


module.exports = Tablero;
