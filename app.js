var btnTranslate = document.querySelector("#btn-translate");
var txtarea = document.querySelector("#txtarea");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/oldenglish.json";

function getTranslateUrl(text){
    return url+ "?text="+text
}

function clickHandler(){
    var inputText =txtarea.value;

    fetch(getTranslateUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        outputDiv.innerText = translatedText;})
}

btnTranslate.addEventListener("click", clickHandler)