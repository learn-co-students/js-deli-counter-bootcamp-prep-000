function takeANumber(line,newGuy){
  line.push(newGuy);
  return 'Welcome, '+ newGuy +'. You are number '+ line.length +' in line.';
}

function nowServing(theLine){
  if(theLine.length!=0){
    var myTurn = theLine[0]
    theLine.shift();
    return 'Currently serving '+ myTurn +'.';
  } else {
    return 'There is nobody waiting to be served!'; 
  }
}

function currentLine(theLine){
  if(theLine.length!=0){
    var listLine = [];
    for(var i=0;i<theLine.length;i++){
      listLine.push(i+1 +'. '+ theLine[i]);
    }
    return 'The line is currently: '+ listLine.join(', ');
  }else{
    return 'The line is currently empty.'; 
  }
}