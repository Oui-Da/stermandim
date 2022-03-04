class player {
    constructor(id){
        this.id = id;
    }
}

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

