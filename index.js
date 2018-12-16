

function takeANumber(katzDeliLine,name) {
    katzDeliLine.push(name);
    var place = katzDeliLine.indexOf(name);
    return (`Welcome, ${name}. You are number ` + (place + 1) + ` in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0] === undefined) {
    return('There is nobody waiting to be served!');
  } else {
    return `Currently serving ` + katzDeliLine.shift() +`.`;
  }
}

function currentLine(katzDeliLine){
  var lineList = [];
  if (katzDeliLine[0] === undefined) {
    return 'The line is currently empty.';
  }
      for (var i = 0; i < katzDeliLine.length; i++) {
      lineList.push(` ${i+1}. ${katzDeliLine[i]}`)
      }
      return "The line is currently:" + lineList;
  }
      
       