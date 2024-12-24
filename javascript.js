document.addEventListener('mousemove', function(e) {
    const background = document.querySelector('.background');
    const amountMovedX = (e.clientX / window.innerWidth) * 20 - 10;
    const amountMovedY = (e.clientY / window.innerHeight) * 20 - 10;
    background.style.transform = `translate(${amountMovedX}px, ${amountMovedY}px)`;
});