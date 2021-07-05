  var katzDeli = [];

function takeANumber(katzDeli,name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  if ( katzDeli.length===0 ) {
    return("There is nobody waiting to be served!")
  } else {
    return(`Currently serving ${katzDeli.shift()}.`);
  }
}

function currentLine(katzDeli) {
  var i = 0;
  var array = [];
  while (i<katzDeli.length) {
    if (i===0) {
      array.push(`${i+1}. ${katzDeli[i]}`)
    } else {
      array.push(` ${i+1}. ${katzDeli[i]}`)
    }
    i++
  }
  if ( i===0 ) {
    return("The line is currently empty.")
  } else {
    return(`The line is currently: ${array}`)
  }
}
