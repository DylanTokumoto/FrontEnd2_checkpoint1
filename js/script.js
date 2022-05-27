var url = document.getElementById('url')
const image = document.getElementById('image-1')
var submit = doocument.getElementById('form__button')





function newImage() {
    let image = document.getElementById('image-1');
    let image1 = document.createElement('img');
    image1.setAttribute('src', url.value )
    image1.setAttribute('alt', 'Imagem adicionada pelo próprio usuário' )

    image.insertAdjacentElement('beforeend', image)
}

newImage();