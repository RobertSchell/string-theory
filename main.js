/*
function xify(str){
    let newStr = "";
    for(let i =0; i < str.length; i++){
        newStr += "x";
    }
    return newStr;

}
console.log(xify("hello"));
console.log(xify("hi there"));
*/


/*
function yellingChars(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += str[i] //adding back character from origiinal string
        newStr += "!" //will add ! after each character // loop will reapeat this action 1 by 1
        //another way to write the above is newStr += str[i] + "!";
    }
    return newStr;

}
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));
*/


/*
function indexedChars(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        newStr += i;
        newStr += str[i];
    }
    return newStr;
}
console.log(indexedChars("hello"));
console.log(indexedChars("bye"));
*/


/*
function exclaim(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] === "?" || str[i] === "."){
            newStr += "!";
        }else{
            newStr += str[i]
        }
    } 
    return newStr
}
console.log(exclaim("What are you doing? Are you a fool?"));
console.log(exclaim("This is fine."));
*/


/*
function truncate(str){
    let newStr = "";
    for(let i = 0; i < 15; i++){
        newStr += str[i];
    }
    return newStr + "...";
}
console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."))
console.log(truncate("Well, that's just, like, your opinion man."))
*/


/*
function ciEmailify(str){
    let newStr = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            newStr += ".";
        }else {
            newStr += str[i];
        }
    }
    newStr += "@codeimmersives.com";
    return newStr.toLowerCase();
}
console.log(ciEmailify("colin jaffe"));
console.log(ciEmailify("Anthony DeRosa"));
*/


/*
function reverse(str){
    let newStr = "";
    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log(reverse("colin"));
console.log(reverse("mesuara"));
*/


/*
function onlyVowels(str){
    let newStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u"){
            newStr += str[i]
        }
    }
    return newStr
}
console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));
*/
