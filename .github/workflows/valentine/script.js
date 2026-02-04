const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 150 - 75;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
function playMusic() {
    document.getElementById("bgMusic").play();
}

