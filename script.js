// 🔥 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let currentUser = "";

const passwords = {
  Priya: "priya123",
  Raj: "raj123",
  Aarushi: "aarushi123"
};

function login(){
  const selected = document.getElementById("characterSelect").value;
  const pass = document.getElementById("passwordInput").value;
  const msg = document.getElementById("loginMessage");

  if(passwords[selected] === pass){
    currentUser = selected;
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("chatApp").classList.remove("hidden");
    document.getElementById("activeUser").innerText = "Logged in as " + currentUser;
    loadMessages();
  } else {
    msg.innerText = "Wrong password.";
  }
}

function sendMessage(){
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if(!text) return;

  database.ref("messages").push({
    user: currentUser,
    text: text
  });

  input.value = "";
}

function loadMessages(){
  const chatBox = document.getElementById("chatBox");

  database.ref("messages").on("child_added", snapshot => {
    const data = snapshot.val();
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");

    msgDiv.innerText = data.user + ": " + data.text;

    if(data.user === currentUser){
      msgDiv.style.background = "#ff5fa2";
      msgDiv.style.color = "white";
      msgDiv.style.alignSelf = "flex-end";
    } else {
      msgDiv.style.background = "rgba(255,255,255,0.6)";
    }

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

function handleKey(e){
  if(e.key === "Enter"){
    sendMessage();
  }
}
