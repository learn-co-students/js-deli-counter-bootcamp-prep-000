var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person)
  return "Welcome, "+ person+". You are number "+katzDeliLine.length+" in line."
}

function nowServing(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
}else {
  return "Currently serving " + katzDeliLine.shift()+ "."
}
}



function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."

  }else {
var aline=[];
    let i = 0;
 while (i < line.length) {
   aline.push(` `+[i+1]+`. `  + line[i])
   i++;
 }
    return "The line is currently:" + aline
  }

}
