
var katzDeli = [];
var otherDeli =[]

function takeANumber(line, person){
  var place = line.length + 1
  line.push(person)
  var placeStr = `Welcome, ${person}. You are number ${place} in line.`
  return placeStr
}

// takeANumber(katzDeli, 'joe')
// takeANumber(katzDeli, 'joey')
// takeANumber(katzDeli, 'joan')

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
  var front = line[0]
  line.shift()
  return `Currently serving ${front}.`
  }
}


function currentLine(line){
  var str = "";
  
  if (line.length === 0){
    return "The line is currently empty.";
  }
  
  else{
    str = "The line is currently: ";
    
    for (var i = 0; i < line.length; i++){
      
      if (i === 0){
        str = str + `${i+1}. ${line[i]}`;
      }
      
      else{
      str = str + `, ${i+1}. ${line[i]}`;
      }
    }
    return str
  }
}