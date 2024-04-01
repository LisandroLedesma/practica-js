const root = document.documentElement.style;
const color = document.getElementById('color');

root.setProperty('--main-bg-color', 'rgb(78, 183, 125)');
color.innerHTML += root.getPropertyValue('--main-bg-color');

let colores = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'blueviolet', 'chartreuse', 
'chocolate', 'blue', 'red', 'green'];
let rgb = true;
let simple = false;
const ID_SIMPLE = 1;

let cambiarColor = () => {
    let nuevoColor;
    if (rgb) {
        nuevoColor = `rgb(${generarNumeroAleatorio(0, 256)}, ${generarNumeroAleatorio(0, 256)}, ${generarNumeroAleatorio(0, 256)})`;
    }
    if (simple) {
        nuevoColor = colores[generarNumeroAleatorio(0, colores.length)]
    }

    color.innerHTML = "Color: ";
    root.setProperty('--main-bg-color', nuevoColor);
    color.innerHTML += root.getPropertyValue('--main-bg-color');
}

let generarNumeroAleatorio = (a, b) => {
    return Math.floor(a + Math.random() * (b - a));
}

let seleccionOpcion = (id) => {
    if (id === ID_SIMPLE) {
        rgb = false;
        simple = true;
    } else {
        rgb = true;
        simple = false;
    }
}