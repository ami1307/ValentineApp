const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("loveMessage");

yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 600 - 250;
    const y = Math.random() * 600 - 250;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
