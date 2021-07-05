
function currentLine(line)  {
  var lineCount = '';
  if(line.length === 0)  {
    console.log("The line is currently empty.");
    return "The line is currently empty."
  }
  else if(line.length > 0)  {
   lineCount = "The line is currently: ";
    var index = 0;
    while(index < line.length)  {
    lineCount = lineCount + `${index+1}`+ '. ' + `${line[index]}`;
    if(index < line.length -1) {
      lineCount = lineCount + ', ';
    }
    ++index;
    }
    console.log(lineCount);
    return lineCount;
  }
}

function takeANumber(line, name)  {
 
  line.push(name);
  console.log (`Welcome, ${name}. You are number ${line.length} in line.`);
  return "Welcome, " + name + ". You are number " + `${line.length}` + " in line.";
  
 }

function nowServing(line)  {
  if(line.length === 0) {
   console.log("There is nobody waiting to be served!");
   return "There is nobody waiting to be served!";
  }
  else  {
    var name = line[0];
    console.log(`Currently serving ${line.shift()}.`);
    return "Currently serving " + name +".";
  }
  
}


