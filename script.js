function toggleDarkMode() {
    const isChecked = document.getElementById('darkMode').checked;
    const body = document.body;
    const outputText = document.getElementById('outputText');

    if (isChecked) {
        body.classList.add('dark-mode');
        outputText.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        outputText.classList.remove('dark-mode');
    }

    updateOutput();
}

function updateProgressBar() {
    const outputText = document.getElementById('outputText');
    const progressBar = document.getElementById('progressBar');
    const scrollWidth = outputText.scrollWidth - outputText.clientWidth;
    const scrolledRatio = outputText.scrollLeft / scrollWidth;
    progressBar.style.width = `${scrolledRatio * 100}%`;
}

function increaseFontSize() {
    const outputText = document.getElementById('outputText');
    const currentFontSize = parseFloat(window.getComputedStyle(outputText).fontSize);
    outputText.style.fontSize = `${currentFontSize * 1.1}px`;
}

function decreaseFontSize() {
    const outputText = document.getElementById('outputText');
    const currentFontSize = parseFloat(window.getComputedStyle(outputText).fontSize);
    outputText.style.fontSize = `${currentFontSize * 0.9}px`;
}

function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}

// Initial call to updateOutput
updateOutput();