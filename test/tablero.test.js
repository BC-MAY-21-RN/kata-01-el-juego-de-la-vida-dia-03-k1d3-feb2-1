
const Tablero = require('../main');

describe('Primera prueba en la clase Tablero', () => {
  test('El tablero debe tener las filas y columnas dadas por los parametros', () => {
    

    let filas = 4;
    let columnas = 8;
    
    let tablero = new Tablero(filas, columnas);
    console.log(tablero.crearTablero().length);
    // let h = tablero.imprimirTablero();
    //expect(sum(1, 2)).toBe(3);
    //const matrizTablero = new Array(filas).fill('*');
    // let prueba = new Array(4)
    //let posiciones = tablero.imprimirTablero(matrizTablero).length;

    // let posiciones = '32';
    // console.log(typeof posiciones);

    // let posiciones = tablero.imprimirTablero(4);
    // console.log(tablero.imprimirTablero());
    // console.log(posiciones.length);
    // expect(h).toBe(32);
   

  });
});
