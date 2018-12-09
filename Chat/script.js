const container1 = document.querySelector('.chat1');
const container2 = document.querySelector('.chat2');

const button1 = container1.querySelector('.send-button')
const button2 = container2.querySelector('.send-button');


function send(container1, container2, classname) {


    const input = container1.querySelector('.send-input')

    const messages1 = container1.querySelector('.messages')

    const messages2 = container2.querySelector('.messages')

    const message1 = createMessage(input.value);

    const message2 = createMessage(input.value, true);

    messages1.appendChild(message1);
    messages2.appendChild(message2);
}

function createMessage(text, our) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }

    const date = (new Date).toLocaleString(options)

    const messageTemplate =
        `<div class="card ${our ? 'sended': ''}">
        <span class="data">${date}</span>
        <p class="user-message">${text}</p>
    </div>`;

    const el1 = document.createElement('div')

    el1.innerHTML = messageTemplate;

    return el1;
}

button1.addEventListener('click', () => send(container1, container2, 'message-left'));
button2.addEventListener('click', () => send(container2, container1, 'message-right'));