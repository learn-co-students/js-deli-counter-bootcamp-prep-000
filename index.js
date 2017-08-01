
var katzDeli = [];

function takeANumber(deliLine,name){
    let id = deliLine.length;
    deliLine.push(name);
    return `Welcome, ${name}. You are number ${id+1} in line.`
}

function nowServing(deliLine){
  let msg= "There is nobody waiting to be served!";
  let name = deliLine.shift();
  return deliLine.length == 0 ?  msg :  `Currently serving ${name}.`;

}

function currentLine(deliLine){
  let msg = "The line is currently empty.";
  let items = deliLine.map((item,id) => `${id + 1 }. ${item}`).join(", ")
  return deliLine.length == 0 ? msg :`The line is currently: ${items}`
}
