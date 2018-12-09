const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const back = document.querySelector('.background');

function showModal() {
    modal.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
}

button.addEventListener('click', showModal);
back.addEventListener('click', hideModal);

