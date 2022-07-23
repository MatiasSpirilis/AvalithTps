// a = inicialización de la variable
// b = analice una condicion
// c = haga algo con la variable a

// for (let i = 0; i <= 5; i++) {
//     console.log("For", i);
//     console.log("For" + i);
//     console.log(`For with Sugar Syntax ${i}`); //template string
// }




const num1 = parseInt(prompt("Ingrese numero 1"));
const num2 = parseInt(prompt("Ingrese numero 2"));

if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    if (num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} es menor que ${num2}`);
    } else {
        console.log(`los numeros son iguales`);
    }
} else {
    console.log("Ingrese solo numeros");
}


