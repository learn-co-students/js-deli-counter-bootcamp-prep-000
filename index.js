function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var welcomeMSG = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return welcomeMSG;
}

function nowServing(katzDeliLine){
  var MSGReturn;
  if (katzDeliLine.length === 0) {
    MSGReturn = 'There is nobody waiting to be served!';
  }
  else {
    MSGReturn = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
  }
  return MSGReturn;
}

function currentLine(array) {
  var MSGReturn;
  if (array.length > 0) {
    MSGReturn = 'The line is currently:';
    for (var i = 0; i < array.length; i++) {
      if (i + 1 === array.length){
        MSGReturn = MSGReturn + ` ${i + 1}. ${array[i]}`;
      }
      else {
      MSGReturn = MSGReturn + ` ${i + 1}. ${array[i]},`;
      }
    }
  }
  else {
    MSGReturn = 'The line is currently empty.';
  }
  return MSGReturn;
}