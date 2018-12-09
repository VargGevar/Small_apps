const container = document.querySelector('.container');


function gridElement(number) {
    const newBlock = document.createElement('div')
    newBlock.classList.add('block')
    newBlock.style.background = `rgb(${random(255)},${random(255)},${random(255)})`
    newBlock.addEventListener('click', function () {
        alert(number);
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

const timer = setInterval(function () {
    container.innerHTML = '';
    grid();
}, 1000);

setTimeout(function () {
    clearInterval(timer)
}, 10000);
// random(255);