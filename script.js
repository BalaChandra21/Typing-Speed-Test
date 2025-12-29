let startTime;
let started = false;

function startTest() {
    if (!started) {
        startTime = new Date();
        started = true;
    }

    let input = document.getElementById("input").value;
    let text = document.getElementById("text").innerText;

    let timeTaken = (new Date() - startTime) / 1000;
    document.getElementById("time").innerText = timeTaken.toFixed(1);

    let words = input.trim().split(" ").length;
    let wpm = Math.round((words / timeTaken) * 60);
    document.getElementById("wpm").innerText = wpm || 0;

    let correctChars = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === text[i]) correctChars++;
    }

    let accuracy = Math.round((correctChars / text.length) * 100);
    document.getElementById("accuracy").innerText = accuracy || 0;
}

function resetTest() {
    document.getElementById("input").value = "";
    document.getElementById("time").innerText = "0";
    document.getElementById("wpm").innerText = "0";
    document.getElementById("accuracy").innerText = "0";
    started = false;
}
