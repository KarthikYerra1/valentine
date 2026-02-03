const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

function submitName() {
    const name = document.getElementById("nameInput").value.trim();
    if (!name) return;

    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
    document.getElementById("questionText").innerText =
        `Hi, ${name} 💖\nWould you like to be my Valentine?`;
}

noBtn.addEventListener("mouseenter", () => {
    const container = document.querySelector(".container");
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    yesScale += 0.1;
    yesBtn.style.transform = `scale(${yesScale})`;
});

function sayYes() {
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "block";
}
