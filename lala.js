var line = ["Steven", "Blake", "Avi"]

function currentLine(currentline) {
  if(currentline.length ===0) {
    return "The line is currently empty."
  } else {
    var currently = "The line is currently: "
    for(var num = 0; num < currentline.length; num++) {
      currently = currently + (num+1) + ". " + line[num] +" "
    }
    return currently;
  }
}

console.log(currentLine(line))
