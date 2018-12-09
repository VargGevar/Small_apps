const container = document.querySelector('.container');
// Указываем число количества бомб на количество клеток
let bomb_modify = 1 / 5
// Задаем число полей
let fields = 100
// Задаем число бомб (1/5 полей)
let bombs = fields * bomb_modify

function gridElement(i) {
    // данная переменная будет отвечать за то является ли клетка бомбой
    let isBomb
    // Если остались бомбы и случайное число от 0 до числа полей меньше шанса встретить бомбу
    if (bombs !== 0 && random(fields) < (fields * bomb_modify)) {
        // То делаем клетку бомбой
        isBomb = true
        // Уменьшаем число бомб
        bombs--
    // Иначе оставлем клетку не бомбой
    } else isBomb = false

    const block = document.createElement('div');
    const button = document.createElement('div');
    button.classList.add('button');
    block.classList.add('block');
    container.appendChild(block);
    block.appendChild(button);
    button.addEventListener('click', function event() {
        // Если бомба то красный
        if (isBomb) button.style.background = ('red');
        // Иначе зеленый
        else button.style.background = ('green');

    })
}

function random(max) {
    let rand = Math.random() * (max + 1);
    rand = Math.floor(rand);
    return rand;
}

function grid() {
    for (let i = 0; i < 100; i++) gridElement(i);
}

grid();