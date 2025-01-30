document.getElementById("si").addEventListener("click", function() {
    alert("¡Sabía que dirías que sí! ❤️");
});

document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.offsetWidth);
    let y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
