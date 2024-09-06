function moveButton() {
    const noButton = document.getElementById('no-btn');

    const randomTop = Math.floor(Math.random() * 400) + 50;
    const randomLeft = Math.floor(Math.random() * 400) + 50; 
    noButton.style.position = 'absolute';
    noButton.style.top = randomTop + 'px';
    noButton.style.left = randomLeft + 'px';
}

function sayYes() {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 500); 
}