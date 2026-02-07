function startMove() {
  console.log("Start clicked");
}
let moveInterval = null;
let x = 0;
let y = 0;

function startMove() {
  const meme = document.getElementById("Crocs in snow.jpg");

  // Disable Start, enable Stop
  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;

  moveInterval = setInterval(() => {
    x += Math.floor(Math.random() * 10);
    y += Math.floor(Math.random() * 10);

    // Keep image on screen
    const maxX = window.innerWidth - meme.width;
    const maxY = window.innerHeight - meme.height;

    x = x % maxX;
    y = y % maxY;

    meme.style.left = x + "px";
    meme.style.top = y + "px";
  }, 100);
}

function stopMove() {
  clearInterval(moveInterval);
  moveInterval = null;

  // Enable Start, disable Stop
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}
console.log("JavaScript connected!");