function dwarfRollCall(dwarves) {
  var dwarfLine=[];

  for(let i=0; i<dwarves.length; i++){
    dwarfLine.push(`${i+1}. ${dwarves[i]}`)
  }
  return dwarfLine.join(' ')
}

function summonCaptainPlanet(planeteerCalls){
  
  var newCalls=[];
  
  var finalCalls=[];
  
  for(let i=0; i<planeteerCalls.length; i++){
    
    newCalls.push(planeteerCalls[i].toUpperCase());
}  

  for(let i=0; i<newCalls.length; i++){
       
    finalCalls.push(`${newCalls[i]}!`)
  }
  return finalCalls
}
  
    
function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
