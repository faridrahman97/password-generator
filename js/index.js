let firstPass = document.getElementById("first-output");
let secondPass = document.getElementById("second-output");
let passwordLength = document.getElementById("password-length-field");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePasswords() {
    firstPass.textContent = getRandomPassword();
    secondPass.textContent = getRandomPassword();
}

function getRandomPassword() {
    let length = passwordLength.value;
    if (length === ""){
        length = 15;
    } else {
        length = parseInt(length);
    }

    let randomPassword = "";
    for (let i = 0; i < length; i++) {
        randomPassword += characters[Math.floor(Math.random() * characters.length)]
    }

    return randomPassword;
}