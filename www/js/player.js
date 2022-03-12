
function generatePatern(colorList){
    const patern = [0,0,0,0];
    for (let i = 0; i < 4; i++) {
        patern[i] = Math.floor(Math.random() * 6) + 1;
        
    }
    return patern;
}



function shuffleDots(dotsArray){
    
    dotsArray.sort(function() {
        return Math.random() - .5;
      });
    return dotsArray;
}

function comparePatern(mainPatern, playerPatern){
    let dotsArray = [0,0,0,0];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if(mainPatern[i]==playerPatern[j]){
                if(i==j && dotsArray[j] != 1){
                    dotsArray[j] = 1;
                }
                else if(dotsArray[j] == 0){
                    dotsArray[j] = 2;
                }
            }
            
        }
        
    }
    dotsArray = shuffleDots(dotsArray);
    return dotsArray;
}



function getColorName(index){
    switch (index) {
        case 1:
            return "pink";
            break;
        case 2:
            return "green";
            break;
        case 3:
            return "purple";
            break;
        case 4:
            return "yellow";
            break;
        case 5:
            return "blue";
            break;
        case 6:
            return "orange";
            break;
        default:
            return "default";
            break;
    }
}

function getColorNameClue(index){
    switch (index) {
        case 0:
            return "notIn";
            break;
        case 1:
            return "In";
            break;
        case 2:
            return "notHere";
            break;
        default:
            return "default"
            break;
    }
}



var listWordPatern = [[1,2,3,4],[5,6,1,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var listCluePatern = [[1,2,0,1],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,],[,,,]];
const maxProposition = 8;
const lengthPatern = 4;
function makeTable(listWordPatern, listCluePatern){
    var grid = document.getElementsByClassName("grid")[0];
    //add table
    var table = document.createElement("table");
    for(let i = 0; i < maxProposition; i++){
        //tr
        var row = document.createElement("tr");

        for(let j = 0; j < lengthPatern; j++){
            //td
            var cell = document.createElement("td");
            cell.className = getColorName(listWordPatern[i][j]);
            row.appendChild(cell);
        }
        
        
        //clue table
        var clueTable = document.createElement("table");
        clueTable.className="clueTable";
        var clueRow = document.createElement("tr");
        for(let h = 0; h < lengthPatern; h++){
            var clueCell = document.createElement("td");
            clueCell.className = getColorNameClue(listCluePatern[i][h]);
            clueRow.appendChild(clueCell);
        }

        clueTable.appendChild(clueRow);
        row.appendChild(clueTable);
        table.appendChild(row);
    }
    grid.appendChild(table);
}
console.log("lancement...");
makeTable(listWordPatern,listCluePatern);
console.log("ok");