function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`
}

function nowServing(katzDeli) {
  let i=0;
  while (i <katzDeli.length){
    i++;
  }
    if (katzDeli.length === 0) {
      return "There is nobody waiting to be served!"
    }
    else
      return (`Currently serving ${katzDeli.shift()}.`)
}

function currentLine(line) {
 if (line.length == 0) {
   return "The line is currently empty."
 }
  else{
      var list = [];
        line.forEach(function( name, index) {
        list.push(`${index+1}. ${ name}`);
     })
      return `The line is currently: ${list.join(", ")}`
    }

}
