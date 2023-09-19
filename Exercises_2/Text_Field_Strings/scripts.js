function analyzeText() {

    const text = document.getElementById('textInput').value.trim();

    const upperCharsCount = (text.match(/[A-Z]/g) || []).length;

    const lowerCharsCount = (text.match(/[a-z]/g) || []).length;

    const vowelsCount = (text.match(/[aeiouAEIOU]/g) || []).length;

    const charCount = text.length;

    document.getElementById('upperCharsCount').innerHTML = `Letras Grandes: ${upperCharsCount}`;

    document.getElementById('lowerCharsCount').innerHTML = `Letras Pequenas: ${lowerCharsCount}`;

    document.getElementById('vowelsCount').innerHTML = `Vogais: ${vowelsCount}`;

    document.getElementById('charCount').innerHTML = `Total de Caracteres: ${charCount}`;

    document.getElementById('analysisResult').classList.remove('hidden');

}

const analyzeButton = document.getElementById('analyzeButton');

analyzeButton.addEventListener('click', analyzeText);