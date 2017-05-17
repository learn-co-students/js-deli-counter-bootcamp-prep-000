var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var lineNumber = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  return lineNumber;
};

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var serving = `Currently serving ${katzDeliLine[0]}.`;
    katzDeliLine.shift();
    return serving;
  };
};

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var string = `The line is currently:`;
    for (let i = 0; i < katzDeliLine.length; i++){
      if (i != katzDeliLine.length - 1){
        string += ` ${i + 1}. ${katzDeliLine[i]},`;
      } else {
        string += ` ${i + 1}. ${katzDeliLine[i]}`;
      };

    };
    return string;
  };
};
