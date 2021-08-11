const container = document.querySelector('#container');
const myButton = document.querySelector('#resetButton');


//funcion para que al entrar a una caja con el mouse, se pinte de negro. Luego puedo cambiar el 'black' por cualquier color si lo meto dentro de una funcion
function paintBoxes (color){
    let boxes = document.querySelectorAll('.square');
    for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = color;
    })
}
};


// funcionabilidad el boton de RESET, loopeo por todas las cajas y pongo su color en BLUE o lo que se me cante, podria remeplzar con paintBoxes('blue') y seria mas readable
myButton.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.square');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'blue';
    }
});


//funcion a la cual yo le doy un numero de entre 1 y 100 y me cree la grid con la cantidad de squares = a el numero * numero por default deberia ser 32
function createGrid (size) {
    if (size > 100) {
        size = 100;
    }
    if (size < 1) {
        size = 1
    }
    for (let i = 0; i < size*size; i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
    }
};
//llamo la funcion creategrid para crear la grid default, para posteriormente selccionar las cajas 
createGrid(32);
//Selecciono todas las boxes dentro del conteiner
let boxes = document.querySelectorAll('.square');
//llamo la funcion paint boxes para mandar el color que deseo, como default dejo el negro, puedo agregar botones con otros colores.
paintBoxes('black');

//debo conseguir input de usuario por si queire hacer el RESIZE de la GRID, para esto obtengo el valor del input o de un promt
//luego de obtener el input, un button event listener que sea aPPLy o algo asi para que se ponga en marcha los siguientes pasos
//debo crear la grid con el neuv osize, y tambien agarrar el stlye del #container y acomodar los     grid-template-columns y rows: al vlaor repeat(SIZE NUEVO AQUI, 1fr);    
//por ultimo, debo re seleccionar lsa boxes maybe
//y volver a llamr a paint boxes
//getting the reference i need to beging the resize on command
const inputValue = document.querySelector('#inputValue');
const resizeButton = document.querySelector('#resizeButton');

//adding the function to get the value from the inputbox when the users clicks the resizebutton
resizeButton.addEventListener('click', () =>{
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    let size = inputValue.value;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    createGrid(size);
    paintBoxes('black');
});
