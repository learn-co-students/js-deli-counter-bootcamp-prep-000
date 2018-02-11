


var katzDeli = [];


function takeANumber(katzDeli, name) {

  katzDeli.push ( `${name}` );
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
  return katzDeli;

}


var katzDeliLine = [];

function nowServing(katzDeli) {


  if ( katzDeli.length === 0 ) {

    return ("There is nobody waiting to be served!")

  } else {

      return (`Currently serving ${katzDeli.shift()}.`)
  }
}

function currentLine (katzDeli) {

  if ( katzDeli.length === 0) {

    return ("The line is currently empty.")

  } else {

    return (`The line is currently: 1. ${katzDeli[0]}, 2. ${katzDeli[1]}, 3. ${katzDeli[2]}`)
  }

}
