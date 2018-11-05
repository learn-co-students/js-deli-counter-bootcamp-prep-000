var katzDeliLine = [];

function takeANumber(line, name) {

line.push(name);


return `Welcome, ${name}. You are number ${line.length} in line.`
};

takeANumber(katzDeliLine, "Ada");

function nowServing(line) {

if (line.length === 0) {
  return "There is nobody waiting to be served!";
}




return "Currently serving " + line.shift() + "."


}



function currentLine(katzDeliLine) {
  var p =[]
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var k = `${'The line is currently: '}`



    for (let i = 0; i < katzDeliLine.length; i++) {
        p.push(`${i+1}`+". " +`${katzDeliLine[i]}`)
          console.log(p);
}
}

return k+p.join(", ");
}
