let testText = "Cats are popular domesticated animals known for their agility, sharp senses, and independent yet affectionate nature. They are members of the Felidae family, which also includes lions and tigers. Cats have a unique hunting style, often employing stealth and quick reflexes to catch prey. They are also known for their grooming habits, purring, and various vocalizations like meowing and hissing";
let startTime, ebdtTime;
function startTest() {
    document.getElementById('inputText').value = testText;
    let userInput = document.getElementById('userInput');
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById('output').innerHTML = "";

    // Start time
    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById('userInput').readOnly = true;

    // Calculate time enlapsted and words per minute (WPM)
    var timeElapsed = ( endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById('userInput').value;
    // split the text using regex to cound words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;
    var wpm = (typedWords.length / timeElapsed) * 60; // words per minute
    if(timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }


// Display the results
var outputDiv = document.getElementById('output');
outputDiv.innerHTML = `<h2>Test Finished!</h2>
    <p>Time Elapsed: ${timeElapsed} seconds</p>
    <p>Words Typed: ${typedWords}</p>
    <p>Words Per Minute (WPM): ${wpm}</p>`
}