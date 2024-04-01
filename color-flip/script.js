const root = document.documentElement.style;
const color = document.getElementById('color');
const simpleElement = document.getElementById('simple');
const rgbElement = document.getElementById('rgb');

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

// Esto puede hacerse con una sola bandera, si, quedó de esta forma porque estaba en consideración una tercer opción "hexa" y se mantiene así porque en algún momento lo voy a actualizar, o no
let seleccionOpcion = (id) => {
    if (id === ID_SIMPLE) {
        rgb = false;
        simple = true;
        simpleElement.classList.add('active');
        rgbElement.classList.remove('active');
    } else {
        rgb = true;
        simple = false;
        rgbElement.classList.add('active');
        simpleElement.classList.remove('active');
    }
}