const container = document.querySelector('#container');
container.style.backgroundColor = 'red';
const myButton = document.querySelector('button');

//for loop to populate container
for (let i = 0; i < 16*16; i++){
    let square = document.createElement('div');
    square.setAttribute('class', 'square');
    container.appendChild(square);
};

const boxes = document.querySelectorAll('.square');
console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'black';
    })
}

myButton.addEventListener('click', () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'blue';
    }
});
