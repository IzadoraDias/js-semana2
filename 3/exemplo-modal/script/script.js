const open = document.querySelector(".login__button");

open.addEventListener("click", function(event){
     event.preventDefault();
     document.querySelector(".login-modal").style.display = "flex";

})


const close = document.querySelector(".login-modal__button-close");

close.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".login-modal").style.display = "none";

})
