function takeANumber(line,name){
  line.push(name);
  let message="Welcome, " + name + ". You are number " + line.length + " in line.";
  return(message);
}

function nowServing(line) {
  if (line.length===0) {
    return("There is nobody waiting to be served!");
  } else {
    let next="Currently serving " + line[0] + ".";
    line.shift();
    return(next);
  }
}

function currentLine(line){
  if (line.length===0) {
    return("The line is currently empty.");
  } else {
    let output="The line is currently:"
    for(let i=0;i<line.length;i++) {
      let place=i+1;
      if (place==1) {
        output=output+" "+place+". "+line[i];
      } else {
        output=output+", "+place+". "+line[i];
      }
    }
    return(output);
  }
}