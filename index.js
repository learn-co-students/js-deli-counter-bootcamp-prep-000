var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    //var j = katzDeliLine.length+1;
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

////////////////////////////////////

function nowServing(katzDeliLine) {
  var firstPerson;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    firstPerson = katzDeliLine[0];
    katzDeliLine.shift();
    return (`Currently serving ${firstPerson}.`);
  }
}

//////////////////////

function currentLine(line){
  if (line.length === 0 ) {
    return ('The line is currently empty.');
  } else {
    var lineUp = [];
    for (var i = 0; i < line.length; i++) {
      lineUp.push(` ${i+1}. ${line[i]}`);

    }
  return ("The line is currently:" + lineUp);
  }
}


// please ignore following:
// function currentLine(){
//   if (currentLine.length === 0 ) {
//     console.log('The line is currently empty.');
//   } else {
//     for (var i = 0; i < currentLine.length; ++1) {
//       console.log("The line is currently:" + ``${currentLine.length+1}.${currently[i],``})
//     }
//   }
// }
