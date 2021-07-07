var katzDeliLine = [];

function takeANumber(line, name){
  line.push(name);

  console.log("Welcome, " + name + ". You are number " + line.length + " in line.");

  return "Welcome, " + name + ". You are number " + line.length + " in line."
}

function nowServing(line) {
  if(line.length ===0) {
    console.log("There is nobody waiting to be served!")
    return "There is nobody waiting to be served!"
} else {
  return "Currently serving " + line.shift() +".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    console.log("The line is currently empty")
    return "The line is currently empty."
  } else {
    var combination = [];
    let i = 0
    for(i=0 ; i < line.length; i++) {
      combination.push([i+1] + ". " + line[i]);
    }
      console.log("The line is currently: " + combination)
      return "The line is currently: " + combination.join(", ");
    }
  }
