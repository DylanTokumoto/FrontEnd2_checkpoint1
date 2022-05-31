const $title = document.getElementById('title')
const $url = document.getElementById('url')
const $description = document.getElementById('description')
const $section = document.querySelector('.main__gallery')
const $button = document.getElementById('form__button')
const $form = document.getElementById('form')
const formItem = document.querySelectorAll('.form__item')
const error = document.querySelectorAll('.error')
// const $buttonPush = [];
const response = [];

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

}





// ===================== validando o formulario =================

$button.addEventListener('click', (e) => {

    let mensagemErro = [0];

    checkTitle();
    checkDesc();
    checkUrl();

    

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
            console.log(mensagemErro.length)
            mensagemErro.pop;
            console.log(mensagemErro.length)
            formItem[0].classList.add('sucess');
            response[0] = true;
        }
    }

    function checkDesc() {

        let mensagemErro = [];
        
        if ($description.value === '' || $description.value == null) {
            e.preventDefault();
            mensagemErro.push('Você precisa adicionar uma descrição');
            error[1].innerText = mensagemErro;
            formItem[1].classList.add('fail');
        } else {
            formItem[1].classList.remove('fail')
            error[1].innerText = null;
            console.log(mensagemErro.length)
            mensagemErro.pop;
            console.log(mensagemErro.length)
            formItem[1].classList.add('sucess');
            response[1] = true;
        }    
    }

    function checkUrl () {

        let mensagemErro = [];
        
        if ($url.value === '' || $url.value == null) {
            e.preventDefault();
            mensagemErro.push('Você precisa adicionar um link para a imagem');
            error[2].innerText = mensagemErro;
            formItem[2].classList.add('fail');
        } else {
            formItem[2].classList.remove('fail')
            error[2].innerText = null;
            console.log(mensagemErro.length)
            mensagemErro.pop;
            console.log(mensagemErro.length)
            formItem[2].classList.add('sucess');
            response[2] = true;    
        }    
    }


    // if (mensagemErro.length > 0 ){
        
    //     window.alert("ta errado");

    // } else {
    //     return newCard();
    // }

    // if (response.values > 0) {
    //     newCard();
    //     } else {
    //         window.alert("Preencha os campos!")
    // }


 // }


    // function execute () {
    //     if (mens)
    // }
    // for (let i of response) {
    //     if (response[i] = true) {
    //         newCard();
    //     } else {
    //         window.alert("Preencha os campos!")
    //     }
    // }
    // console.log(response);
})