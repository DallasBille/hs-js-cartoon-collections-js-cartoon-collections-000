
function dwarfRollCall(dwarves){
  var numberedLine=[];
  
  for(let i=0; i<dwarves.length; i++){

  numberedLine.push(`${i+1}. ${dwarves[i]}`);
}
return numberedLine.join(' ')
}

function summonCaptainPlanet(fruits){
  var upperCase=[];
  
  for(let i=0; i<fruits.length; i++){
    upperCase.push(`${fruits[i].toUpperCase()}!`)
  }
     return upperCase
  
}
function longPlaneteerCalls(shortCalls){
  for(let i=0; i<shortCalls.length; i++){
    
    if(shortCalls[i].length >4){
       return true
    }
       return false
  }
}

function findTheCheese(cheddarCheese){
 var cheese=["cheddar","gouda","camembert"];
 
  for(let i=0; i<cheddarCheese.length; i++){
    
    if(cheese.includes(cheddarCheese[i])){
       
       return cheddarCheese[i];
    }
  }
  return "no cheese!"
}


