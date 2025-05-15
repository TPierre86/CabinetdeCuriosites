document.addEventListener("DOMContentLoaded", () => {
    const paragraphe = document.querySelector(".exposition-contenue p");

    if (!paragraphe) return;
    const mots = paragraphe.innerText.trim().split(" ");
    paragraphe.innerHTML = mots.map(mot => `<span class="fade-word">${mot}</span>`).join(" ");
    const spans = paragraphe.querySelectorAll(".fade-word");


    setTimeout(() => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add("invisible");
            }, index * 200);
        });
    }, 5000);
});
