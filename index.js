var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  //var i = 0;
  if(katzDeli < 1){
    return "There is nobody waiting to be served!"
  }else{
    // ['Steven', 'Blake', 'Avi']
    var name = katzDeli[0];
    katzDeli.shift()
    return `Currently serving ${name}.`
    //katzDeli.shift[0];
  }
}

function currentLine(line){
  if (line.length < 1){
    return "The line is currently empty."
  }else{
    var array = []
    for (var i = 0; i < line.length; i++) {
      var name = line[i] // "Bill"
      var l = i + 1 // 1
      array.push(`${l}. ${name}`)
    }
    // "1. Bill, 2. Jane, 3. Ann"
    return `The line is currently: ${array.join(', ')}`
  }
}
