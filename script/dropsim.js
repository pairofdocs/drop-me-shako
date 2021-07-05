
let button = document.querySelector('button');
let resultTxt = document.querySelector('.results');  // select class with .{}
let shakoImg = document.querySelector('.shako');

// clear results
resultTxt.textContent = 'Results:';
shakoImg.src = ""

// random int
function randInt(max) {
    return Math.floor(Math.random() * max);
}


button.onclick = function() {
    resultTxt.textContent = 'Results:';
    shakoImg.src = ""
    // loop 100 runs. see if randInt() will return ==911  (1:912 chance from MFB dropcalc)
    for (let i = 0; i < 100; i++) {
        num = randInt(912); // min-0 and max-911
        if (num === 911) {
            resultTxt.textContent += ' Shako found on run ' + i.toString() + '!'; // multiple shako drops allowed
            
            shakoImg.src = "img/shako.png"
        }
    }
    if (!resultTxt.textContent.includes('Shako')) {
        resultTxt.textContent += " Hahaha you're too late! Run again";
    }
}