var katzDeli = []

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name);
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeli) {
if (katzDeli.length === 0)
   {return "There is nobody waiting to be served!"}
    else {
    var response = `Currently serving ${katzDeli.shift()}.`
    return response;
  }
}

function currentLine(line) {
  if (line.length === 0)
  {return `The line is currently empty.`}  
  else for(let i = 0; i < line.length; i++) {
     katzDeli.push(` `+[i+1]+`. `  + line[i])
   }
   return(`The line is currently:` + katzDeli)
}