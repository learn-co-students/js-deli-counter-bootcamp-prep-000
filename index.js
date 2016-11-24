
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){

  katzDeliLine.push(name)
  return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
//length+1 WORKED


  return katzDeliLine;

}

function nowServing(katzDeliLine){


  if(katzDeliLine.length > 0){
    return(`Currently serving ${katzDeliLine[0]}.`)
    katzDeliLine = katzDeliLine.slice(1)
    return katzDeliLine
  } else {
      return "There is nobody waiting to be served!";
  }

//katzDeliLine = katzDeliLine.shift(0)

return katzDeliLine;
}


function currentLine(){

//  for (let i = 0; i < katzDeliLine.length; i++){
    if (katzDeliLine.length === 0){
      return("The line is currently empty.");
  } else if(katzDeliLine.length > 0){
      return(`The line is currently ${katzDeliLineline[i]}. ${katzDeliLine[i]},`)
  }

//  }


  //return katzDeliLine;
}
