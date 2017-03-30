var katzDeliLine = [];

function takeANumber(ketzDeliLine,name){
  ketzDeliLine.push("${name}");
  console.log("Welcom, ${name}. You are number ${ketzDeliLine.length} in line.")
  }

function nowServing(katzDeliLine){
      for(var i=0; i < ketzDeliLine.length; i++){
        if(i === 0){
          return "There is nobody waiting to be served!";
        } else{
          // return "Currently serving ${name}.";
          return "Currently serving ${katzDeliLine.shift()}.";
      }
}



function currentLine(katzDeliLine){
    for(var i=0; i < ketzDeliLine.length; i++){
      if(i===0){
        return "The line is currently empty.";
      } else{
        return ("The line is currently: "+ i + ". " + "${ketzDeliLine.length}");
        // return ("The line is currently: "+ i + ". ${name}");
    }
}
takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent"); // "Welcome, Kent. You are number 3 in line."

currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

nowServing(katzDeliLine);// "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, "Matz"); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
