const $title = document.getElementById('title')
const $url = document.getElementById('url')
const $description = document.getElementById('description')
const $section = document.querySelector('.main__gallery')
const $button = document.getElementById('form__button')
const $buttonPush = [];


function newCard() {

    $button.addEventListener('click', function () {
        $buttonPush.push('click');

        let arrayInfos = [{
            titulo: $title.value,
            descricao: $description.value,
            image: $url.value
        }];
        
        

        for (let i of arrayInfos) {
        
            var defaultCard = `<div class="gallery__card">
            <h2>${i.titulo}</h2>
            <img src="${i.image}"
            <p>${i.descricao}</p>
            </div>`
        
            var novoDefaultCard = document.createElement("div");
        
            novoDefaultCard.innerHTML = defaultCard;
        
            $section.appendChild(novoDefaultCard);
        
            
        }

    });
}

newCard();