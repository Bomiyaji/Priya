function checkName() {
  const name = document.getElementById("nameInput").value.trim().toLowerCase();
  const response = document.getElementById("response");

  if (name === "priya") {
    response.textContent = "I was waiting for you.";
    setTimeout(() => {
      document.getElementById("entryScreen").style.display = "none";
      document.getElementById("mainContent").classList.remove("hidden");
      window.scrollTo(0,0);
    }, 1500);
  } else {
    response.textContent = "This page isn’t for you.";
  }
}

function toggleMessage(el) {
  const msg = el.querySelector(".timeline-msg");
  msg.style.display = msg.style.display === "block" ? "none" : "block";
}

function startMeter() {
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("meterText");
  bar.style.width = "87%";
  text.textContent = "Still growing.";
}
