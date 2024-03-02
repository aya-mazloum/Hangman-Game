const answerSection = document.getElementById("answer-section");
const screenletters = document.querySelectorAll(".letter");

answerSection.style.letterSpacing = "10px";

const randomWords = ["happy", "fruit", "table", "physics", "tissue", "water", "sky", "Banana"];
let word = randomWords[Math.floor(Math.random()*randomWords.length)].toUpperCase();

let answerSectionLetters = "_".repeat(word.length);
answerSection.innerHTML = answerSectionLetters;

let wrongAttempts = 0;
let correctAttempts = 0;
const checkedLetters = [];
    
function checkLetter(letter) {
    if (checkedLetters.includes(letter))
        return;
    let letterIndex = word.indexOf(letter);
    if (letterIndex > -1) {
        correctAttempts++;
        answerSectionLetters = answerSectionLetters.substring(0, letterIndex) + letter + answerSectionLetters.substring(letterIndex+1, answerSectionLetters.length);
        answerSection.innerHTML = answerSectionLetters;
        word = word.substring(0, letterIndex) + "." + word.substring(letterIndex+1, word.length);
        letterIndex = word.indexOf(letter);
        if (letterIndex > -1)
            checkLetter(letter);
        if (correctAttempts == word.length) {
            setTimeout(function () {
                alert("GOOD JOB!");
                location.reload();
            }, 100);
        }
        checkedLetters.push(letter);
    }
    else {
        wrongAttempts++;
        checkedLetters.push(letter);
        if (wrongAttempts == 1)
            head.apply();
        else if (wrongAttempts == 2)
            body.apply();
        else if (wrongAttempts == 3)
            leftHand.apply();
        else if (wrongAttempts == 4)
            rightHand.apply();
        else if (wrongAttempts == 5)
            leftLeg.apply();
        else {
            rightLeg.apply();
            setTimeout(function () {
                alert("GAME OVER!");
                location.reload();
            }, 100);
        }
    }
}

window.addEventListener("keydown", function (e) {
    const inputLetter = e.key;
    if (/^[a-zA-Z]+$/.test(inputLetter) && inputLetter.length == 1) {
        checkLetter(inputLetter.toUpperCase());
    }
});

for (let i = 0; i < screenletters.length; i++) {
    screenletters[i].addEventListener("click", function () {
        checkLetter(screenletters[i].innerHTML.toUpperCase());
    });
}