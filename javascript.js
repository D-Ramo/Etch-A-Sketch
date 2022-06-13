const container = document.getElementById("container")
let target;
let random;
let gridmaking = false;
document.getElementById('reset').addEventListener('click', () => {
    location.reload()

})
document.getElementById('rainbow').addEventListener('click', () => {
    random = true;

})
document.getElementById('black').addEventListener('click', () => {
    random = false

})
container.addEventListener('mouseover', function (e) {
    target = e.target;

    if (target.matches('.collum')) {
        if (random == true) {
            let randoColor = Math.floor(Math.random() * 16777215).toString(16);
            target.style.backgroundColor = `#${randoColor}`
            console.log(randoColor)

        } else {
            target.style.backgroundColor = 'black';
        }
    }
})

function makeGrids() {
    let number = prompt("Enter the dimensions (for example: $ X $) MAX = 69: ");
    container.style.setProperty('--numCols', number);
    container.style.setProperty('--numRows', number);

    for (i = 0; i < number; i++) {
        for (j = 0; j < number; j++) {
            let collum = document.createElement('div');
            container.appendChild(collum).className = 'collum'
        }
    }
    return;
}

makeGrids()