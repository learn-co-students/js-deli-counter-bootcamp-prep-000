function takeANumber (currLine, name){
  currLine.push(name)
  return (`Welcome, ${name}. You are number ${currLine.length} in line.` );
}

function nowServing (currLine){
  if(currLine.length<1){
    return ("There is nobody waiting to be served!");
  }else{
  
  return (`Currently serving ${currLine.shift()}.`) ;
  }
}

function currentLine (currLine){
  var answer="The line is currently: ";
  if(currLine.length<1){
    return ("The line is currently empty.");
  }else{
    for(let i=0;i<currLine.length-1;i++){
      answer+=(`${i+1}. ${currLine[i]}, `);
    }
    answer+= (`${currLine.length}. ${currLine[currLine.length-1]}`);
    
    return answer;
    
    
  }
}