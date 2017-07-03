var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
}
function nowServing (line) {
  if (!line.length)
  console.log("There is nobody waiting to be served!")
  return("There is nobody waiting to be served!")
}
function currentLine(line) {
  if(!line.length) {
    return "The line is currently empty.";
  }

}
