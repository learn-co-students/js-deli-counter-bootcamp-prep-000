//var katzDeliLine = [];
function takeANumber(katzDeli, name){
var place = katzDeli.length + 1;
katzDeli.push(name);
return "Welcome, " + name + "." + ` You are number ${place} in line.`
}

function nowServing(katzDeli){
  if (katzDeli.length < 1) {
  return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`
  }
}

function currentLine(katzDeli){

  if (katzDeli.length === 0) {
  return "The line is currently empty.";

  } else {
    var line = "The line is currently: "

    for (let i = 0; i < katzDeli.length; i++) {
      if (i === 0) {
      line += `${i+1}. ${katzDeli[i]}`;

      } else {
      line += `, ${i+1}. ${katzDeli[i]}`
      }

    }

  return line;
  }
}
