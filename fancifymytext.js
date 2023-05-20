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

function capitalizeAndMoo() {
    const inputTextArea = document.getElementById("inputText");
    const text = inputTextArea.value;

    let sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        for (var j = 0; j < words.length; j++) {
            if (j === words.length - 1) {
                words[j] = words[j].toUpperCase() + "-Moo";
            } else {
                words[j] = words[j].toUpperCase();
            }
        }
        sentences[i] = words.join(" ");
    }

    inputTextArea.value = sentences.join(". ");
}
