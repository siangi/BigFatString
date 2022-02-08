"use strict";

function format(){
    let choice = document.querySelector("#formatOptions").value;
    let unFormatted = document.querySelector("#unformatted").value;
    let formatted;
    if (choice === "firstLetterUp"){
        formatted = firstLetterUp(unFormatted);
    } else if (choice === "findFirstName"){
        formatted = findFirstName(unFormatted);
    } else if (choice === "lengthFirstName"){
        formatted = lengthFirstName(unFormatted);
    } else if (choice === "middleName"){
        formatted = middleName(unFormatted);
    } else if (choice === "filetype"){
        formatted = fileType(unFormatted);
    } else if (choice === "passwordHide"){
        formatted = passwordHide(unFormatted);
    } else if (choice === "thirdUp"){
        formatted = thirdUp(unFormatted);
    } else if (choice === "afterHyphenUp"){
        formatted = afterHyphenUp(unFormatted);
    }

    document.querySelector("#output").textContent = `Output: ${formatted}`;
}

function firstLetterUp(toFormat){
    return toFormat.substring(0, 1).toUpperCase() + toFormat.substring(1, toFormat.length).toLowerCase();
}

function findFirstName(toFormat){
    return toFormat.split(" ")[0]
}

function lengthFirstName(toFormat){
    return toFormat.indexOf(" ");
}

function middleName(toFormat){
    let begin = toFormat.indexOf(" ");
    let end = toFormat.indexOf(" ", begin + 1);
    let middleName = toFormat.substring(begin, end);
    return `Beiginning: ${begin + 1}, End: ${end}, middleName: ${middleName.trim()}`;
}

function fileType(toFormat){
    return toFormat.endsWith(".jpg") || toFormat.endsWith(".png");   
}

function passwordHide(toFormat){
    return "*".repeat(toFormat.length);
}

function thirdUp(toFormat){
    return toFormat.substring(0, 2) + toFormat.substring(2, 3).toUpperCase() + toFormat.substring(3, toFormat.length);
}

function afterHyphenUp(toFormat){
    let nextUpperCase = false;
    let result = " ";
    for (let i = 0; i < toFormat.length; i++){
        let character = toFormat[i];

        if (nextUpperCase){
            character = character.toUpperCase();
        }

        nextUpperCase = (character === "-" || character === " ");
        result += character;
    }

    return result;
}