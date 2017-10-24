function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if(katzDeli.length > 0 ){
    var current = `Currently serving ${katzDeli[0]}.`
    katzDeli.shift()
    return current
  }
  else {
    return "There is nobody waiting to be served!";
  }
  return katzDeli
}

function currentLine(line){
    var current = "The line is currently: "
    if(line.length > 0){
      for(let i = 0; i < line.length; ++i){
        if(i < line.length - 1){
          current += `${i+1}. ${line[i]}, `
        }
        else {
          current += `${i+1}. ${line[i]}`
        }
      }
      return current
    }
    else {
    return "The line is currently empty."
    }
}
