const $title = document.getElementById('title')
const $url = document.getElementById('url')
const $description = document.getElementById('description')
const $section = document.querySelector('.main__gallery')
const $button = document.getElementById('form__button')
const $buttonPush = [];


function newCard() {

    $button.addEventListener('click', function () {
        $buttonPush.push('click');



        // =========== CRIANDO O CARD ===========

        let $card = document.createElement('div');
        $card.setAttribute('class', 'gallery__card');
        $section.insertAdjacentElement('beforeend', $card);



        // =========== CRIANDO O TITULO ===========

        let $div1 = document.createElement('div');
        $div1.setAttribute('class', 'image__title');
        $card.insertAdjacentElement('beforeend', $div1);


        // =========== SETANDO O VALOR DE H1 ===========

        let $titleCard = document.createElement('h1');
        $div1.insertAdjacentElement('beforeend', $titleCard);
        $titleCard.innerHTML = $title.value;



        // =========== CRIANDO A TAG IMG ===========

        let $div2 = document.createElement('div');
        $div2.setAttribute('class', 'card__image');
        $buttonPush.forEach(function (_, index) {
            $div2.setAttribute('id', `image-${index + 1}`);
        });
        $card.insertAdjacentElement('beforeend', $div2);




        // =========== SETANDO O VALOR DA IMG ===========

        let $image = document.createElement('img');
        $image.setAttribute('src', $url.value);
        $image.setAttribute('alt', 'Imagem adicionada pelo próprio usuário');
        $div2.insertAdjacentElement('beforeend', $image);



        // =========== CRIANDO A DESCRIÇÃO ===========

        let $div3 = document.createElement('div');
        $div3.setAttribute('class', 'image__description');
        $card.insertAdjacentElement('beforeend', $div3);


        // =========== SETANDO O VALOR DA DESCRIÇÃO ===========

        let $imageDescription = document.createElement('h1');
        $div3.insertAdjacentElement('beforeend', $imageDescription);
        $imageDescription.innerHTML = $description.value;

    });
}

newCard();