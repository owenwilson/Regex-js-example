const text = "Este es un texto 11";

const regexText = /^[a-zA-Z\u00E0-\u00FC ]+$/;

if(regexText.test(text)){
    console.log("Es texto");
}else{
    console.log("No es texto");
}


const number = "1238784379";
const regexNumber = /^\d+$/;

if(regexNumber.test(number)){
    console.log("Es un numero");
}else{
    console.log("No es un numero");
}

const dirtyText = "Este es un texto 1234432 1234 que da un ejemplo";
const cleanText = dirtyText.replaceAll(/\d+/g,"").replaceAll(/ +/g," ");

console.log(cleanText);

const beersXML = "<beers>"+
    "<element>erdinger</element>"+
    "<element>corona</element>"+
    "<element>delirium</element>"+
    "<element>fuller</element>"+
"</beers>";

const beers = beersXML.match(/<element>.+?<\/element>/g).map(e=>e.replace(/<element>|<\/element>/g,""));

console.log(beers);

const text2 = "Este es un texto con 123712837 y 128930 se ven numeros";
const text3 = "Este es un texto112 1ae2 1tiene algunos 5Ed9 9Ae2";
console.log(text2.match(/\d+/g).length);
console.log(text3.match(/\d[a-zA-Z][a-zA-Z]\d/g).length);
