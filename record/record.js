document.addEventListener('gameStarted', () => {
setTimeout(() => {
    const watermark = document.getElementById("blippwatermark");
    watermark?.style?.opacity ="0";
}, 1000);
});