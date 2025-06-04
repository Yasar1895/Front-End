// speech.js

let recognition;
const textArea = document.getElementById("text");
const statusDisplay = document.getElementById("status");

function startListening() {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech recognition not supported in this browser.");
    return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    statusDisplay.innerText = "🎧 Listening...";
  };

  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    textArea.value += transcript;
  };

  recognition.onerror = (event) => {
    statusDisplay.innerText = "❌ Error: " + event.error;
  };

  recognition.onend = () => {
    statusDisplay.innerText = "🛑 Stopped listening.";
  };

  recognition.start();
}

function stopListening() {
  if (recognition) {
    recognition.stop();
  }
}

function speakText() {
  const text = textArea.value;
  if (!text) {
    statusDisplay.innerText = "⚠️ Please enter or speak some text first.";
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
  statusDisplay.innerText = "🔊 Speaking...";
}
