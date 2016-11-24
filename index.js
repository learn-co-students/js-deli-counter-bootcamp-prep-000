
var katzDeliLine = [];

function takeANumber(katzDeliLine, name){

  for(let n = 0; n <= katzDeliLine.length; n++){
  katzDeliLine.push[name];
  return(`Welcome, ${name}. You are number ${katzDeliLine.length+1} in line.`)

//  katzDeliLine++;
  }


/*  var n = 0;

  while (n <= katzDeliLine.length){
    katzDeliLine.push[name];
    return(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
  }
*/

  return katzDeliLine;
//  console.log(`Welcome ${name}. You are number ${katzDeliLine.length} in line.`)

}

function nowServing(katzDeliLine){

  for (let i = 0; i < katzDeliLine.length; i++){
  if (katzDeliLine.length == 0){
    return("There is nobody waiting to be served!");
  } else if(katzDeliLine.length > 0){
    return(`Currently serving ${katzDeliLine[i]}.`)
    katzDeliLine = katzDeliLine.slice(0)
    return katzDeliLine;
  }
}

}


function currentLine(){

  for (let i = 0; i < katzDeliLine.length; i++){
    if (katzDeliLine.length == 0){
      return("The line is currently empty.");
  } else if(katzDeliLine.length > 0){
      return(`The line is currently ${katzDeliLineline[i]}. ${katzDeliLine[i]},`)
  }

  }


  //return katzDeliLine;
}
