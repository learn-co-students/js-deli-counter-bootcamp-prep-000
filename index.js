function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);

  var position = katzDeliLine.length;

  var welcomeMessage = `Welcome, ${name}. You are number ${position} in line.`;

  return welcomeMessage;
};


function nowServing(katzDeliLine) {

  var customer = katzDeliLine[0];
  katzDeliLine.shift();
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  };

  return `Currently serving ${customer}.`;
};


function currentLine(katzDeliLine){


  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else {
    var ennumeratedLine = [];

    for (var i = 0; i < katzDeliLine.length; i++){
      var name = katzDeliLine[i];
      var place = i + 1
      ennumeratedLine.push(` ${place}. ${name}`);
    };

    return `The line is currently:${ennumeratedLine}`;
  };
};
