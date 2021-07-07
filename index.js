var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var index = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${index} in line.`;
}

function nowServing(katzDeliLine){
  var first = katzDeliLine[0];
  if (katzDeliLine.length === 0){
    return  "There is nobody waiting to be served!";
  }
  else{
    katzDeliLine.splice(0, 1);
    return `Currently serving ${first}.`;
  }
}

function currentLine(line){
  if (line.length > 0){
  //  console.log("The current line is");
  var people = "";
    for(let i=0; i<line.length; i++){
      people += `${i+1}. ${line[i]}, `;
    }
    var peo = people.substring(0, people.length-2);
    return "The line is currently: "+peo;
  }
  else{
    return "The line is currently empty."
  }
}
