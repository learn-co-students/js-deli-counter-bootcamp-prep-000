var katzDeliLine = new Array;

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
};

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var next = katzDeliLine.shift()
    return `Currently serving ${next}.`
  }
}

function currentLine(katzDeliLine){
  var line = "The line is currently: "
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for (let i=0; i < katzDeliLine.length; i++){
      let position = i + 1;
      let name = katzDeliLine[i];
      line += `${position}. ${name}`;
      if (position !== katzDeliLine.length){
        line += ', ';
      };
    };
  };
  return line;
};
