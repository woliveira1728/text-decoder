const areaCryptDecrypt = document.getElementById("area-encrypt");
const areaCryptDecryptResult = document.getElementById("area-decrypt");
const cryptBtn = document.getElementById("crypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");


const encryptor = () => {
    const textCrypt = areaCryptDecrypt.value;
    let newTextCrypt = "";

    for (let i = 0; i < textCrypt.length; i++) {
        const currentChar = textCrypt[i];

        switch (currentChar) {
          case 'e':
            newTextCrypt += 'enter';
            break;
          case 'i':
            newTextCrypt += 'imes';
            break;
          case 'a':
            newTextCrypt += 'ai';
            break;
          case 'o':
            newTextCrypt += 'ober';
            break;
          case 'u':
            newTextCrypt += 'ufat';
            break;
          default:
            newTextCrypt += currentChar;
        }
    }
    areaCryptDecryptResult.innerText = newTextCrypt;
}

const decryptor = () => {
    const textDecrypt = areaCryptDecrypt.value;
    let newTextDecrypt = textDecrypt.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    areaCryptDecryptResult.innerText = newTextDecrypt;
}

cryptBtn.onclick = (e) => {
    e.preventDefault();
    encryptor();
}

decryptBtn.onclick = (e) => {
    e.preventDefault();
    decryptor();
}