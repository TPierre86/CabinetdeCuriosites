/* =====================================
Page d'acceuil Plume à mémoire inversée
======================================*/

document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("exposition");
    const fondNoir = document.querySelector(".fond-noir");
    const paragraphe = document.querySelector(".exposition-contenue p");

    if (!section || !fondNoir || !paragraphe) return;

    const texteInitial = paragraphe.innerText.trim();
    let effacementTimeouts = [];
    let lancementEffacementTimeout;

    function resetTexte() {
        paragraphe.innerHTML = texteInitial
            .split(" ")
            .map(mot => `<span class="fade-word">${mot}</span>`)
            .join(" ")
    }

    function lancerEffacement() {
        const spans = paragraphe.querySelectorAll(".fade-word");

        spans.forEach((span, index) => {
            const timeoutId = setTimeout(() => {
                span.classList.add("invisible");
            }, index * 600);
            effacementTimeouts.push(timeoutId);
        });
    }

    function retirerEffacement() {
        clearTimeout(lancementEffacementTimeout)
        effacementTimeouts.forEach(timeout => clearTimeout (timeout));
        effacementTimeouts = [];
    }

    section.addEventListener("mouseenter", () => {
        fondNoir.classList.add("active");
        resetTexte();
        retirerEffacement();
    lancementEffacementTimeout = setTimeout(() => {
        lancerEffacement();
    }, 1000);    
    })

    section.addEventListener("mouseleave", () => {
        fondNoir.classList.remove("active");
        retirerEffacement();
        resetTexte();
    })
});
