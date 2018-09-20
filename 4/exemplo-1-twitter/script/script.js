//pega o botão twittar
const button = document.querySelector(".tweet-composer__button");

//pega o texto e coloca na na linha
const inputTweet = document.getElementById("tweetComposerInput");
const tweetsTimeline = document.querySelector(".tweets-timeline");

//ação do botão
 button.addEventListener ("click", function(event){
   event.preventDefault ();

//cria a div que abraça todo o conteudo
 const div = document.createElement("div");
 div.className = "tweets-timeline__box"

//cria o header
const header = document.createElement("div");
header.className = "tweets-timeline__box"
header.innerHTML = `<span class="tweets-timeline__name">Iza</span>
<span class="tweets-timeline__username">@Izacomz</span>
<span class="tweets-timeline__date">${new Date}</span>`

//cria elemento novo pro tweet
   const newTweetP= document.createElement("p");
//passei o conteúdo do tweet pro paragrafo
   newTweetP.innerHTML = inputTweet.value;

//footer
const footer = document.createElement("div");
footer.className = "tweets-timeline__footer"
footer.innerHTML = `<button class="tweets-timeline__delete-button button"> Excluir </button>`

//coloca o header + texto do tweet na div
div.appendChild(header);
div.appendChild(newTweetP);
div.appendChild(footer);

//coloca a div na timeline
 tweetsTimeline.insertBefore(div, tweetsTimeline.childNodes[0]);
 inputTweet.value = "";

//deletar twitter
const buttonDelete = document.querySelector(".tweets-timeline__delete-button");

  buttonDelete.addEventListener('click', function(evento){
  evento.preventDefault();
  div.remove();

})
})
