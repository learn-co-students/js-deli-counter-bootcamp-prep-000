function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine[0] !== undefined){
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else{
    return 'There is nobody waiting to be served!';
  }
}
function currentLine(katzDeliLine) {
  if(katzDeliLine[0] !== undefined){
    var string = 'The line is currently: ';
    for(let i = 0; i < katzDeliLine.length; i++){
      string += `${i === 0 ? i + 1 : `, ${i+1}`}. ${katzDeliLine[i]}`;
    }
    return string;
  } else{
    return "The line is currently empty.";
  }
}