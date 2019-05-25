var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeli) {
  var katz = katzDeli.shift();
  if (katzDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${katz}.`;
}

function currentLine(line){
  var katz = [];
  if(line.length === 0){
    return "The line is currently empty.";
  }
  for(var i = 0; i < line.length; i++ ){
    katz.push(`${i + 1}. ${line[i]}${i === line.length -1? "" : ","}`);
  }
return `The line is currently: ${katz.join(" ")}`;
}
