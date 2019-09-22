var katzDeli = [];
function findIndexOfElement(array, element){
  for (let i = 0;array.length>i;i++){
    if (array[i]===element){
      return i;
    }
  }
}
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${findIndexOfElement(line, name)+1} in line.`;
}
function nowServing(line) {
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var temp = line[0];
    line.shift();
    return `Currently serving ${temp}.`;
  }
}
function currentLine(line) {
  if (line.length === 0){
    return "The line is currently empty.";
  } else {
    var temp = "The line is currently: ";
    for (let i = 0;line.length>i;i++) {
      if (i === 0){
        temp = temp + `${i+1}. ${line[i]}`;
      } else {
        temp = temp + `, ${i+1}. ${line[i]}`;
      }
    }
    return temp;
  }
}
console.log(takeANumber(katzDeli, "hanuman"));
console.log(takeANumber(katzDeli, "banuman"));
console.log(takeANumber(katzDeli, "canuman"));
console.log(takeANumber(katzDeli, "lanuman"));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));
console.log(nowServing(katzDeli));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));
console.log(nowServing(katzDeli));
console.log(nowServing(katzDeli));
console.log(currentLine(katzDeli));


