document.addEventListener("DOMContentLoaded", () => {

    const gift = document.getElementById("giftContainer");
    const lid = document.querySelector(".gift-lid");
    const wishes = document.getElementById("wishesContainer");
    const wishText = document.getElementById("wishText");
    const heartlessText = document.getElementById("heartlessText");
    const subWish = document.getElementById("subWish");

    gift.addEventListener("click", () => {

        lid.classList.add("open");

        setTimeout(() => {
            gift.style.display = "none";
            wishes.classList.remove("hidden");
            wishes.classList.add("show");

            typeWriter("Happy New Year 2026!", wishText, 120);

            setTimeout(() => {
                heartlessText.textContent = "Happy New Year \"Heartless\" ";
            }, 2500);

            setTimeout(() => {
                subWish.innerHTML = `
                ✨ May 2026 bring you endless happiness<br>
                🎉 New opportunities and big success<br>
                ❤️ Love, peace and good health always<br>
                🌟 Dreams that turn into reality<br><br>
                Cheers to a fresh start and a magical year ahead!
                `;
            }, 3500);

            for (let i = 0; i < 80; i++) confetti();
        }, 1400);
    });

    function typeWriter(text, el, speed) {
        let i = 0;
        el.textContent = "";
        (function write() {
            if (i < text.length) {
                el.textContent += text.charAt(i++);
                setTimeout(write, speed);
            }
        })();
    }

    function confetti() {
        const c = document.createElement("div");
        c.className = "confetti-piece";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = `hsl(${Math.random()*360},100%,50%)`;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }

    function snow() {
        const s = document.createElement("div");
        s.className = "snowflake";
        s.textContent = "❄";
        s.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 8000);
    }

    setInterval(snow, 300);
});
