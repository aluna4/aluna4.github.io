function makeAlert(){
    alert("Hello, world");
}

function increaseText() {
    document.getElementById("inputText").style.fontSize = "2em";  
}

function changeStyle() {
    const inputTextArea = document.getElementById("inputText");
    const fancyShmancyRadio = document.getElementById("fancyRadio");

    if (fancyShmancyRadio.checked) {
        inputTextArea.style.fontWeight = "bold";
        inputTextArea.style.color = "blue";
        inputTextArea.style.textDecoration = "underline";
    } else {
        inputTextArea.style.fontWeight = "normal";
        inputTextArea.style.color = "inherit";
        inputTextArea.style.textDecoration = "none";
    }
}

// Add event listener to the "Moo" button
document.getElementById("upperAndMoo").addEventListener("click", function() {
    var inputTextArea = document.getElementById("inputText");
    var text = inputTextArea.value.toUpperCase();
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        var lastWordIndex = words.length - 1;
        words[lastWordIndex] = words[lastWordIndex] + "-Moo";
        sentences[i] = words.join(" ");
    }
    inputTextArea.value = sentences.join(". ");
});

