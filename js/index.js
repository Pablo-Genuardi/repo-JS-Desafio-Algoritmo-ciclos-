
debugger

let pieza001 = parseInt(prompt("Ingresa el numero de piezas a construir (max: 12):"));

for (let i = 1; i <= pieza001; i++) {
    if (i === 12) {
        console.log('Fabricando ultima pieza posible, la No:', i);
        break;
    }
    else {
        console.log('Fabricando pieza No:', i);
    }
    

}

