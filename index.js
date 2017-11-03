var katzDeli = []; // creates array for people in line

function takeANumber(katzDeli, name) {
          katzDeli.push(name);
    return (`Welcome, ${name}. You are number ${[katzDeli.length]} in line.`);
}


function nowServing(deliLine) {
    if (deliLine.length > 1){
      return (`Currently serving ${deliLine.shift()}.`)
    }
    else {
      return ("There is nobody waiting to be served!");
    }
}

function currentLine(line) { //line = [] ; line.length //=> 0
  var newLine = ["The line is currently:"];
  if (line.length === 0){
        return ("The line is currently empty.");
      } else {
    for (let i = 0; i < line.length; i++) { // 0 < 0 //=> false
      i < line.length - 1? newLine.push(`${i+1}. ${line[i]},`):
       newLine.push(`${i+1}. ${line[i]}`)
        }
        return newLine.join(' ')
    }
  }
