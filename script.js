/* ==========================
   DROPDOWN MENU (DESKTOP)
========================== */
document.querySelectorAll("nav li").forEach(li => {
    li.addEventListener("mouseenter", () => {
        let dropdown = li.querySelector("ul");
        if (dropdown) dropdown.style.display = "block";
    });

    li.addEventListener("mouseleave", () => {
        let dropdown = li.querySelector("ul");
        if (dropdown) dropdown.style.display = "none";
    });
});


/* ==========================
   SMOOTH SCROLL
========================== */
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* ==========================
   DARK MODE TOGGLE
========================== */
const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "10px 15px";
darkBtn.style.fontSize = "20px";
darkBtn.style.cursor = "pointer";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "8px";
darkBtn.style.background = "#b30000";
darkBtn.style.color = "white";

document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkmode");

    if (document.body.classList.contains("darkmode")) {
        darkBtn.innerText = "☀️";
        document.body.style.background = "#1a1a1a";
        document.body.style.color = "#eee";
    } else {
        darkBtn.innerText = "🌙";
        document.body.style.background = "#fdfdfd";
        document.body.style.color = "#333";
    }
});


/* ==========================
   FORM HANDLING
========================== */
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Terima kasih! Pesan Anda telah dikirim.");

        form.reset();
    });
}


/* ==========================
   GALERI: ZOOM ANIMATION
========================== */
const galeriImages = document.querySelectorAll("#galeri img");

galeriImages.forEach(img => {
    img.addEventListener("click", () => {
        img.style.transform = "scale(1.15)";
        img.style.transition = "0.2s";

        setTimeout(() => {
            img.style.transform = "scale(1)";
        }, 200);
    });
});


/* ==========================
   OPTIONAL: HERO FADE-IN
========================== */
window.addEventListener("load", () => {
    const hero = document.querySelector("header");
    hero.style.opacity = "0";
    hero.style.transition = "opacity 1.5s";

    setTimeout(() => {
        hero.style.opacity = "1";
    }, 100);
});
