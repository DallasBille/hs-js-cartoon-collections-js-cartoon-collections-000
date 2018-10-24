
function dwarfRollCall(dwarves){
  var numberedLine=[];
  
  for(let i=0; i<dwarves.length; i++){

  numberedLine.push(`${i+1}. ${dwarves[i]}`);
}
return numberedLine
}

function summonCaptainPlanet(calls){
  var upperCase=[];
  
  for(let i=0; i<calls.length; i++){
    upperCase.push(`${calls[i].toUpperCase()}!`)
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

function findTheCheese(foods){
 var cheese=["cheddar","gouda","camembert"];
 
<<<<<<< HEAD
  for(let i=0; i<foods.length; i++){
=======
  for(let i=0; i<cheddarCheese.length; i++){
>>>>>>> b195c281105c3f35dad0fdb676da893343221901
    
    if(cheese.includes(foods[i])){
       
       return foods[i];
    }
  }
  return "no cheese!"
}




 for(let i=0; i<cheddarCheese.length; i++){
   if(cheese[i].includes(cheddarCheese[i])){
   
   return cheese[i]
}
}

