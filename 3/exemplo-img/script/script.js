//children - traz todas as tags

const links = document.querySelector(".gallery__nav");
const imagem = document.querySelector(".gallery__image");
const figcaption = document.querySelector("figcaption");

// console.log(links.length)
// console.log(links.children)

for(let i = 0; i < links.children.length; i++){
    console.log(links.children[i])
    const fio = links.children[i];
    fio.addEventListener("click", function(){
        //pegar o caminho da img no atributo data-image
        const img = this.dataset.image;
        console.log(img);
        imagem.src = img;
        const caption = this.dataset.title;
        imagem.src = img;               
        figcaption.innerHTML = caption;
    })
  }
