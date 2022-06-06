var outputColor = document.getElementById('output-color');
var genColorOne = document.getElementById('gen-color-one');
var genColorTwo = document.getElementById('gen-color-two');
var colorCode = document.getElementById('color-code');
var copyBtn = document.getElementById('copy-btn');

function genarateGradient(){
    outputColor.style.background = "linear-gradient(to right bottom, " + genColorOne.value + ", " + genColorTwo.value + ")";
    colorCode.innerText = outputColor.style.background + "; ";
}
genColorOne.addEventListener('input', genarateGradient);
genColorTwo.addEventListener('input', genarateGradient);

copyBtn.addEventListener('click', function(){
    copyBtn.innerHTML = 'Copied!';
    navigator.clipboard.writeText(colorCode.innerHTML);
});
