var maizeAndBlueDeli = [];

function takeANumber (maizeAndBlueDeli, name){
  maizeAndBlueDeli.push(name);
  return `Welcome, ${name}. You are number ${maizeAndBlueDeli.length} in line.`;
};

function nowServing(line) {
  if (line.length > 0){
    var serving = line.shift()
    return `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  };
};

function currentLine(line) {
  var lineString = "The line is currently:";

  if (line.length > 0){
    for (var i in line){
      lineString += ` ${parseInt(i)+1}. ${line[i]},`;
    };
  } else if (line.length === 0){
    return "The line is currently empty."
  } else {
    return "Something went very wrong."
  };

  return lineString.slice(0,lineString.length-1);
};
