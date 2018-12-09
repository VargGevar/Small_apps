const container = document.querySelector('.container');


function gridElement() {
    const newBlock = document.createElement('div')
    newBlock.classList.add('block')
    newBlock.style.background = `rgb(${random(255)},${random(255)},${random(255)})`
    newBlock.addEventListener('click', function () {
        newBlock.style.background = `rgb(${random(255)},${random(255)},${random(255)})`
    })
    container.appendChild(newBlock);
}

function grid() {
    for (i = 0; i < 9; i++) gridElement(i + 1);
}

function random(max) {
    let ran = Math.random() * (max + 1)
    ran = Math.floor(ran);
    return ran;
}

grid();