const chatBox = document.getElementById("chatBox");
const typingIndicator = document.getElementById("typingIndicator");

function unlockRoom() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const message = document.getElementById("entryMessage");

  if (name === "priya") {
    message.textContent = "I was waiting for you.";
    setTimeout(() => {
      document.getElementById("entryScreen").style.display = "none";
      document.getElementById("chatApp").classList.remove("hidden");
      startConversation();
    }, 1500);
  } else {
    message.textContent = "Access denied.";
  }
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(text, delay=1200) {
  typingIndicator.classList.remove("hidden");
  setTimeout(() => {
    typingIndicator.classList.add("hidden");
    addMessage(text,"bot");
  }, delay);
}

function startConversation() {
  botReply("Hi Priya.");
  setTimeout(()=>botReply("I wasn’t sure you’d come."),2000);
  setTimeout(()=>botReply("But I’m glad you did."),4000);
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if(!text) return;

  addMessage(text,"user");
  input.value="";

  generateResponse(text.toLowerCase());
}

function handleKey(e){
  if(e.key==="Enter") sendMessage();
}

function generateResponse(input){
  if(input.includes("why")){
    botReply("Because some conversations matter more than they show.");
  }
  else if(input.includes("what")){
    botReply("Maybe just a moment. Maybe something more.");
  }
  else if(input.includes("hi")){
    botReply("You always start simply.");
  }
  else{
    botReply("I’m listening.");
  }
}
