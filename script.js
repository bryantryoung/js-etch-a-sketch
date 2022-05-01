const buttons = document.querySelectorAll('button');
let currentMode = 'default'


function createGrid(numOfCells){
    numOfCells = numOfCells || 16;
    let cellWidth = 400/numOfCells + 'px'
    let cellHeight = 400/numOfCells + 'px'
    const gridContainer = document.getElementById('grid-container');
    for (let i = 0; i < numOfCells; i++) {
    
    const div = document.createElement('div');
    div.classList.add('grid-div');
    gridContainer.appendChild(div);
    };
}
createGrid(300);


function draw(currentMode) {
    const cells = document.querySelectorAll('#grid-container > div')

    cells.forEach((cell) => {
    cell.style.backgroundColor = 'white'
    cell.addEventListener("mouseover", (e) => {
        if (currentMode == 'default') {
            e.target.style.backgroundColor = '#707070';
        } else if (currentMode == 'rainbow') {
            const rainbowColors = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
            const randomColor = Math.floor(Math.random() * rainbowColors.length);
            e.target.style.backgroundColor = rainbowColors[randomColor];
        }
        
    });

    });
}


const modeBtns = document.querySelectorAll('#btn-modes > button');
modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('rainbow')) {
            draw('rainbow');
            currentMode = 'rainbow';

        } else {
            draw('default');
            currentMode = 'default';
        }
    })
})

draw('rainbow');