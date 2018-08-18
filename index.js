var katzDeliLine = [];
var katDeli = [];

function takeANumber(arr, name) {
  arr.push(name);
  return ('Welcome, ' + name + '. You are number ' + (arr.indexOf(name) + 1)
    ' in line.'
  );
}



function nowServing(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.lenght){
    i++;
  }
  if (katzDeliLine.lenght === 0) {
    return "There is nobody waiting to be served!"
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}`);
}



function currentLine(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.lenght){
    line.push(``+[i+1]+`.` + katzDeliLine[i])
    i++;
  }
  if (katzDeliLine.lenght === 0){
    return "The line is empty.";
  } else
    return (`The line is currently:` + line);
}
