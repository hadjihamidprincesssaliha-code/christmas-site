
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("greetBtn");
    const message = document.getElementById("message");
    const counter = document.getElementById("counter");

    let clicks = 0;

    btn.addEventListener("click", () => {
        clicks++;

        message.textContent = "🎅 MERRY CHRISTMAS! 🎁";

        message.classList.add("animate");

        setTimeout(() => {
            message.classList.remove("animate");
        }, 200);

        counter.textContent = "Clicks: " + clicks;
    });
});
