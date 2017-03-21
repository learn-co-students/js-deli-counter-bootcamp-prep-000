// 1. takeANumber(): should accept the current line of people, `katzDeliLine`, 
// along with the new person's name as parameters; should return their position
// in line.
function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

// 2. nowServing(): should return the next person in line and then remove them
// from the line.
function nowServing(line) {
  if (line.length > 0){
    var serving = line.shift()
    return `Currently serving ${serving}.`;
  } else {
    return "There is nobody waiting to be served!";
  };
};

// 3. currentLine(): returns the current line
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
