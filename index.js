var katzDeli = [];
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  var number = katzDeliLine.indexOf(name) + 1;
  return ('Welcome, ' + name + '. You are number ' + number + ' in line.');
}


function nowServing(array) {
  var name = array[0];
  if(array.length > 0) {
    array.shift();
    return 'Currently serving ' + name + '.';
  } else {
  return("There is nobody waiting to be served!");
  }
}


function currentLine(arr) {
  var message = "The line is currently: ";

    if (arr.length === 0) {
        return "The line is currently empty.";
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
              message += i+1 + '. ' + arr[i];
            }
            else {
              message += i+1 + '. ' + arr[i] + ', ';
            }
        }
        return message;
    }
}
