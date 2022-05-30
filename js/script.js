const $title = document.getElementById('title')
const $url = document.getElementById('url')
const $description = document.getElementById('description')
const $section = document.querySelector('.main__gallery')
const $button = document.getElementById('form__button')
const $form = document.getElementById('form')
const formItem = document.querySelectorAll('.form__item')
const error = document.querySelectorAll('.error')
// const $buttonPush = [];


function newCard() {

    let arrayInfos = [{
        titulo: $title.value,
        descricao: $description.value,
        image: $url.value
    }];

    for (let i of arrayInfos) {

        var defaultCard = `
            <div class="gallery__card">
            <h2>${i.titulo}</h2>
            <img src="${i.image}" alt="Imagem adicionada pelo próprio usuário!">
            <p>${i.descricao}</p>
            </div>
        `

        var novoDefaultCard = document.createElement("div");

        novoDefaultCard.innerHTML = defaultCard;

        $section.appendChild(novoDefaultCard);

    }

    // });
}


// ===================== validando o formulario =================

$button.addEventListener('click', (e) => {

    checkTitle();

    function checkTitle() {
        let mensagemErro = [];
        if ($title.value === '' || $title.value == null) {
            e.preventDefault();
            mensagemErro.push('Você precisa adicionar um titulo');
            error[0].innerText = mensagemErro;
            formItem[0].classList.add('fail');
        } else {
            formItem[0].classList.remove('fail');
            error[0].innerText = null;
            formItem[0].classList.add('sucess');
            checkDesc();
        }
    }

    function checkDesc() {
        let mensagemErro = [];
        if ($description.value == null) {
            console.log("teste")
            e.preventDefault();
            mensagemErro.push('Você precisa adicionar uma descrição com no máximo 120 caracteres 🥴🥴')
            error[1].innerText = mensagemErro;
            formItem[1].classList.add('fail');
        } else {
            formItem[1].classList.remove('fail');
            error[1].innerText = null;
            formItem[1].classList.add('sucess');
            newCard();
        }
    }
})