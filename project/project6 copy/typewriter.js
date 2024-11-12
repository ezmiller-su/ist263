var aText = ["accessing", "comstock customs"];
var iSpeed = 100; // Time delay of print out
var iIndex = 0; // Start printing array at this position
var iArrLength = aText[0].length; // Length of the text array
var iScrollAt = 20; // Start scrolling up at this many lines

var iTextPos = 0; // Initialise text position
var sContents = ''; // Initialise contents variable
var iRow; // Initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);

    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout(typewriter, 500);
        }
    } else {
        setTimeout(typewriter, iSpeed);
    }
}

document.addEventListener("DOMContentLoaded", typewriter);