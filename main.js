const screen1 = document.querySelector("#screen1")
const screen2 = document.querySelector("#screen2")
const cookie_closed = document.querySelector("#cookie_closed")
const btnReset = document.querySelector('button')
let bancoPalavras = ["A vida trará coisas boas se tiver paciência", "Não compense na ira o que lhe falta na razão", "Defeitos e virtudes são apenas dois lados da mesma moeda", "Não há que ser forte. Há que ser flexível", "A maior de todas as torres começa no solo", "Quem quer colher rosas tem de estar preparado para suportar os espinhos", "Sem o fogo do entusiasmo, não há o calor da vitória", "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã", "Quem olha para fora sonha; quem olha para dentro acorda", "Espere pelo mais sábio dos conselhos: o tempo", "Todas as coisas são difíceis antes de se tornarem fáceis", "Deixe de lado as preocupações e seja feliz"]
let posicaoArray
let word

cookie_closed.addEventListener('click', showMessage)
btnReset.addEventListener('click', toggleScreen)
document.addEventListener('keydown', enterReset)

function showMessage(){
  toggleScreen()
  posicaoArray = Math.floor(Math.random() * bancoPalavras.length);
  word = bancoPalavras[posicaoArray];
  screen2.querySelector("p").innerText = word
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterReset(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
      toggleScreen()
    }
}