function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name+"." + " You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine[0]===undefined){
    return 'There is nobody waiting to be served!'}
    else{
      return "Currently serving "+katzDeliLine.shift(0)+".";
    }
}


function currentLine(katzDeliLine){
  var deliLineString ="The line is currently: ";
  if(katzDeliLine[0]===undefined){
    return 'The line is currently empty.';
  }else{ for(let i = 0; i < katzDeliLine.length; i++) {
    if(i===katzDeliLine.length-1){
      deliLineString = deliLineString + parseInt(i+1) +". "+ katzDeliLine[i];
    }
     else{ deliLineString = deliLineString + parseInt(i+1) +". "+ katzDeliLine[i]+', ';
     }
  }
    return deliLineString;
  }
}