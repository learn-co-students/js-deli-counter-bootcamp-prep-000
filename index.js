var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(n) {
  if (n.length === 0) {
    return "There is nobody waiting to be served!"
  } else{
    
    var name = n[0];
    n.splice(0,1);
    return "Currently serving" + " "+ name +  "." ;
  }
}

function currentLine(c) {
  var currentline = [];
  if (c.length === 0) {
    return "The line is currently empty."
  } else{
      for (var i = 0; i < c.length; i++ ) {
        currentline.push(`${i + 1}.  ${c[i]}`)
        
      }
    
  }return "The line is currently:" + ' ' + currentline.join(", ")
  
  
  
}


