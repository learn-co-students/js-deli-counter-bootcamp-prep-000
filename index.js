var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return (`Welcome, ${name}. You are number ${line.length} in line.`);
 }

 function nowServing(array) {
    if(array.length > 0){
    var tempName = array[0];
      array.shift();
        return `Currently serving ${tempName}.`
} else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line) {
  if(line.length > 0) {
  var newArr = [];

    for(var i = 0; i < line.length; i++) {
      newArr.push(` ${i+1}. ${line[i]}`)
    }
} else {
    return "The line is currently empty."
  }
    return `The line is currently:${newArr}`
}
