//takeANumber accepts two parameters--line and persons name.  includes message "Welcome, ${name}. You are number ${line} in line"

function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

//nowServing accepts current line of people(katzDeliLine) and returns and removes the next individual in line. When line is empty, return "There is nobody waiting to be served!"


function nowServing(line){
  while (line.length>0){
    name = line.shift();
    return `Currently serving ${name}.`;
  }
  return "There is nobody waiting to be served!"
}


//currentLine accepts line and returns a string "The line is currently: 1. name, 2. name, 3. name ... n. name".  If line is empty, returns "The line is currently empty."

function currentLine(line){
  var str = "The line is currently: "
  if (line.length>0){
    for (let i=0; i<line.length; i++){
      str += `${i+1}. ${line[i]}`;
      if (i+1<line.length){
        str += ", "
      }
    }
  return str;
  }else{
    return "The line is currently empty."
   }
}