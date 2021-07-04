
var array = [];
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let firstName = line[0];
    line.shift();
    return `Currently serving ${firstName}.`;
  }
}


function currentLine(line) {
  var string = "The line is currently";
  if(line.length === 0) {
    return string + " empty."
  } else {
    string+= ": "
      for(let i=0; i < line.length; i++) {
        if(i===line.length-1) {
          string+= `${i+1}. ${line[i]}`;
        } else {
          string+= `${i+1}. ${line[i]}, `;
        }
      } return string;
  }

  
}