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
    let userInput = parseInt(prompt('Type a number to resize the grid!'));
    let amtOfSquares = userInput * userInput;
    let sqWidth = 40;
    let sqHeight = 40;
    if ( /^[0-9.,]+$/.test(userInput) && (userInput <= 100 && userInput >= 1)) {
        for (let i = 0; i < amtOfSquares; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.setAttribute('style', 'width: ' + sqWidth + 'px; height: ' + sqHeight + 'px');
            gridSquare.classList.add('gridSquare');
            drawContainer.appendChild(gridSquare);
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.style.backgroundColor = 'blue';
            });
            button.addEventListener('click', () => {
                drawContainer.removeChild(gridSquare);
            });
        }
    } else {
        alert('Error: input must be a number between 1 and 100');
    }
});