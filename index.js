var katzDeli = [];

function takeANumber(katzDeli,name){

  if (katzDeli.length ==0) {
    katzDeli[0] = name
  }else {
    katzDeli.push(name)
  }
return 'Welcome, '+name+'. You are number '+(katzDeli.length) +' in line.'
}


function nowServing(katzDeli){

  if(katzDeli.length > 0){
    var person = katzDeli[0]
    katzDeli.shift()
    return 'Currently serving '+person+'.';
  }else {
    return  "There is nobody waiting to be served!"
  }
}

//  3. Build a function `currentLine` that returns the current line. For example,
// if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)`
// would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody
// in line, it should return `"The line is currently empty."`

function currentLine(katzDeli){

  var line = "The line is currently: "

  if(katzDeli.length > 0){
    var i
    for(i = 1 ; i <= katzDeli.length ; i++ ){
      line = line + i +'. '+ katzDeli[i-1]
      if (i < katzDeli.length){
        line = line + ', '
      }
    }
  }else {
    line = "The line is currently empty."
  }
  return line
}
