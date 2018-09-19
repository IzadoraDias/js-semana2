const inputNome =  document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
 
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementById("cadastroInputLevel");
const inputNews = document.getElementById("cadastroInputNews");

const button = document.querySelector(".cadastro__button");

button.addEventListener("click", function(event){
 event.preventDefault();

//  const optionSelect = inputArea.options[inputArea.selectedIndex]
//  console.log(inputArea.selectedIndex)

console.log(inputNews)
console.log(inputNews.checked)
console.log(inputNome.value)


  if(inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " "){
    inputNome.focus();
     return false;
  }else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " "){
     inputEmail.focus();
     return false;
  }else if (inputEmailConfirm.value === undefined || inputEmailConfirm.value === null || inputEmailConfirm.value === "" || inputEmailConfirm.value === " "){
     inputEmailConfirm.focus();
     return false;
  }else if (inputPassword.value === undefined || inputPassword.value === null || inputPassword.value === "" || inputPassword.value === " " || inputPassword.value < 7){
     inputPassword.focus();
     alert("A senha deve ter mais de 7 dígitos")
     return false;
  }else if (inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " "){
    inputPasswordConfirm.focus();
     return false;
  }else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " "){
     inputPhone.focus();
    return false;
  }

  //correspondencia email e senha
  else if (inputEmail.value !== inputEmailConfirm.value){
     inputEmail.focus(); 
     alert("Email de confirmação não corrensponde");    
     return false;       
  }else if (inputPassword.value !== inputPasswordConfirm.value){
     inputEmail.focus(); 
     alert("Senhas não correnspondem");    
    return false;
   
  //mudar a cor do fundo de acordo com a área
  }else if(inputArea.selectedIndex === 0){
    document.querySelector("body").style.backgroundColor = "lightblue"
  }else if(inputArea.selectedIndex === 1){
    document.querySelector("body").style.backgroundColor = "lightgreen"
  }else if(inputArea.selectedIndex === 2){
    document.querySelector("body").style.backgroundColor = "lightpink"
  }else if(inputArea.selectedIndex === 3){
    document.querySelector("body").style.backgroundColor = "orange"


  }
    else if(inputNews.value === null){
    alert("É uma pena que você não deseja receber nosso conteúdo exclusivo")
  }

  //submeter o formulário

    document.querySelector("body").style.backgroundColor = "#fff";
    const form = this.closest("form");
    form.submit();
 })


inputEmailConfirm.addEventListener("paste", function(event){
     event.preventDefault();
     return false
})