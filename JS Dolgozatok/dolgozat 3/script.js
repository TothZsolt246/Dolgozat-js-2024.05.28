function otoslotto() {
    let numbers = new Set();


    while (numbers.size < 5) {
        let randomNumber = Math.floor(Math.random() * 90) + 1;
        numbers.add(randomNumber);
    }

    let sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    return sortedNumbers;
}

function displayLottoNumbers() {
    const lottoNumbers = otoslotto();
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Kihúzott számok: ' + lottoNumbers.join(', ');
}


document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate');
    generateButton.addEventListener('click', displayLottoNumbers);
});

