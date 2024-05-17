const container = document.querySelector('.container');

const header1 = document.createElement('h1');
header1.textContent = 'Etch-A-Sketch';
header1.classList.add('header1');
container.appendChild(header1);

const header2 = document.createElement('h3');
header2.textContent = 'Enter a number to size the grid!';
header2.classList.add('header2');
container.appendChild(header2);

const button = document.createElement('button');
button.textContent = 'Draw Grid';
container.appendChild(button);

const drawContainer = document.createElement('div');
drawContainer.classList.add('drawContainer');
container.appendChild(drawContainer);

button.addEventListener('click', () => {
    let playerInpt = prompt('How many grid squares per side?');
    let num = 16;
    let playerVal = num * num;
    for (let i = 0; i < playerVal; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
    }
});