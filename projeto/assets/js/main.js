const respostas = [
    'Certeza!',
    'Não tenho tanta certeza',
    'É decididamente assim',
    'Não conte com isso',
    'Sem dúvidas!',
    'Pergunte novamente mais tarde',
    'Sim, Definitivamente!',
    'Minha resposta é Não',
    'Você pode contar com isso',
    'Melhor não te dizer agora',
    'A meu ver, sim',
    'Minhas fontes dizem não',
    'Provavelmente',
    'Não é possivel prever isso agora',
    'Boa Perspectiva',
    'As perspectivas não são tão boas assim',
    'Sim',
    'Concentre-se e pergunte novamente',
    'Sinais apontam que sim',
]

function create(element, attribute, attValue) {
    let elemento = document.createElement(element);
    elemento.setAttribute(attribute, attValue);
    return elemento;
}

const resposta = document.querySelector('.result');

const btn = document.querySelector('.main-btn');

const input = document.querySelector('.main-question');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const respLength = respostas.length;
    const rand = Math.floor(Math.random() * respLength);
    let span = create('span', 'class', 'answer');
    resposta.appendChild(span);

    if(input.value === '' || input.value === ' '){
        alert('Por favor escreva algo para a adivinhação')
    }else {
        span.textContent = `${respostas[rand]}`;
        btn.setAttribute('disabled', '');
        setTimeout(() => {
            span.textContent = '';
            btn.removeAttribute('disabled');
        }, 3000)
    }
})