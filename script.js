function changeBackgroundColor() {
    const randomColor = getRandomHexColor();
    const screen = document.getElementById('screen');
    const colorValue = document.getElementById('colorValue');

    console.log(randomColor);
    screen.style.backgroundColor = randomColor;
    colorValue.innerHTML = randomColor;
}

function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, '0')}`
}