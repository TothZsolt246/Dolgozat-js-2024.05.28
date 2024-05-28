
function fullStack(frontendNames, backendNames) {
   
    const frontendDevelopers = frontendNames.split(';');
    const backendDevelopers = backendNames.split(';');

    
    const fullStackDevelopers = frontendDevelopers.filter(name => backendDevelopers.includes(name.trim()));

    return fullStackDevelopers;
}

function checkFullStackDevelopers() {
    const frontendNames = document.getElementById('frontend').value;
    const backendNames = document.getElementById('backend').value;

    const result = fullStack(frontendNames, backendNames);
    const resultDiv = document.getElementById('result');

    if (result.length > 0) {
        resultDiv.textContent = 'Full stack fejlesztők: ' + result.join(', ');
    } else {
        resultDiv.textContent = 'Nincs olyan fejlesztő, aki mind a front-endhez, mind a back-endhez értene.';
    }
}
