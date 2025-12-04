function attachGradientEvents() {
    const gradientDivEl = document.getElementById('gradient');
    const resultDivEl = document.getElementById('result');

    gradientDivEl.addEventListener('mousemove', handleMouseMove);

    function handleMouseMove(e) {
        const cursorDistanceFromLeft = e.offsetX;
        const divElWidth = e.target.clientWidth;

        const percent = Math.floor(cursorDistanceFromLeft / divElWidth * 100);
        resultDivEl.textContent = `${percent}%`;
    }
}
