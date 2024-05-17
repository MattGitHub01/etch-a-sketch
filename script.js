const container = document.querySelector('.container');

const header1 = document.createElement('h1');
header1.textContent = 'Etch-A-Sketch!';
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
    let sqSize = 640/userInput;
    let colorList = ['#e81416', '#ffa500', '#faeb36', '#79c314', '#487de7', '#4b369d', '#70369d'];
    let color = '';
    if (userInput > 0 && userInput < 101) {
        drawContainer.style.background = 'black';
        for (let i = 0; i < amtOfSquares; i++) {
            const gridSquare = document.createElement('div');
            let sqOpacity = 1;
            gridSquare.setAttribute('style', 'background-color: white; width: ' + sqSize + 'px; height: ' + sqSize + 'px');
            gridSquare.classList.add('gridSquare');
            drawContainer.appendChild(gridSquare);
            gridSquare.addEventListener('mouseover', () => {
                color = colorList[Math.floor(Math.random() * colorList.length)];
                gridSquare.style.background = color;
                sqOpacity = sqOpacity - .1;
                gridSquare.style.opacity = sqOpacity;
            });
            button.addEventListener('click', () => {
                drawContainer.removeChild(gridSquare);
            });
        }
    } else {
        drawContainer.style.background = 'white';
        alert('Error: input must be a number between 1 and 100');
    }
});