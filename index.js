var katzDeli = [];

function takeANumber(katzDeli, name){
    katzDeli.push(name);
  return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
}

function nowServing(deliLine){
  if (!deliLine.length){
    return "There is nobody waiting to be served!";
  }
    return `Currently serving ${deliLine.shift()}.`;
}

function currentLine(deliLine){
  var position = [];
  if (!deliLine.length){
    return "The line is currently empty.";
  };
  for(var i = 0; i < deliLine.length; i++){
    position.push(` ${i +1}. ${deliLine[i]}`);
  };
  return "The line is currently:" + position;
}
