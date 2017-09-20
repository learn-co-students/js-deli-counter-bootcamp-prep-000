
// Deli counter
//
// var katzDeli = [];
//
// var katzDeliLine = ['Ada', 'Grace', 'Kent' ];

function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name);
    return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

//return person being served then remove from line
function nowServing(katzDeliLine){
  var outPutServing = "Currently serving "
    if(katzDeliLine.length > 0){
      return outPutServing + katzDeliLine.shift() + ".";
} else{
  return 'There is nobody waiting to be served!'
 }
}

// returns current line , if empty return msg
function currentLine(katzDeliLine){

  var output = "The line is currently: ";
  var arrayOfStrings = [];


      if(katzDeliLine.length === 0){
        return "The line is currently empty."
      }

    for(var i = 0; i < katzDeliLine.length; i++){

      arrayOfStrings.push(`${i+1}. ${katzDeliLine[i]}`)

    }
    //debugger

    return  output + arrayOfStrings.join(", ")  //method2:
    //return arrayOfStrings joined together with commas
}

// function lookForDeadbeat(allDaGuys){
//   var foundHim = false;
//   for (var i = 0; i < =allDaGuys.length; i++){
//     if (allDaGuys[i] == "steve"){
//       foundHim = true;
//       return foundHim;
//     }
//   }
//   return foundHim;
// }
