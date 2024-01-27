const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 12
let randomPassOneEl = document.getElementById("password-one")
let randomPassTwoEl = document.getElementById("password-two")

function getRandomCharachter() {
    let randomCharIndex = Math.floor(Math.random() * characters.length)
    return characters[randomCharIndex]
}

console.log( getRandomCharachter() )

function getRandomPassword() {
    let passwordOne = ""
    let passwordTwo = ""
    for (i = 0; i < passwordLength; i++) {
        passwordOne += getRandomCharachter()
        passwordTwo += getRandomCharachter()
    }
    randomPassOneEl.textContent = passwordOne
    randomPassTwoEl.textContent = passwordTwo
}

