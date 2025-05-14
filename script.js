// init variables

let star = "+";
let trunk = "|";
let empty = " ";
let full = "*";
let leftSide = "/";
let rightSide = "\\";


// init functions

function showPineStory(height, topOffset, spacing) {
    let toRename = height + topOffset;
    let width = toRename * 2 + 1;
    let center = toRename;

    for (let row = topOffset; row < toRename; row++) {
        let line = "";
        
        for (let i = 0; i < spacing; i++) {
            line += " ";
        }
        for (let col = 0; col < width; col++) {
            if (row === 0 && col === center) {
                line += star;
            }
            else if (col === center) {
                line += trunk;
            }
            else if ((center == col + row)) {
                line += leftSide;
            }
            else if ((center == col - row)) {
                line += rightSide;
            }
            else if ((col < center - row + 1) || (col > center + row - 1)) {
                line += empty;
            }
            else if ((col > center - row + 1) || (col < center + row - 1)) {
                if (getRandomInt(12) <= 2) {
                    line += star;
                }
                else {
                    line += full;
                }
            }
        }
        console.log(line);
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function showBottomTrunk(center) {
    for (let i = 0; i < 3; i++) {
        let line = "";

        for (let i = 0; i < center; i++) {
            line += " ";
        }
        line += "###";
        console.log(line);     
    }
}

function showFullPine(height, story) {
    for (let i = 0; i < story; i++) {
        showPineStory(height, i, story - 1 - i);
    }
    // full bullshit, need changes when i would do it
    showBottomTrunk(height + 2);
}

// execute code

showFullPine(3, 4);