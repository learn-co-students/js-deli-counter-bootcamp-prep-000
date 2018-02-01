
function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    var response = "There is nobody waiting to be served!";
    console.log(response);
    return response;
  } else {
    var person = line.shift();
    var response1 = "Currently serving " + person + ".";
    console.log(response1);
    return response1;
  }
}

function currentLine(array) {
  if (array.length < 1) {
    return "The line is currently empty.";
  } else {
    var queue = [];
    array.forEach(function(name, index) {
      queue.push((index + 1).toString() + ". " + name);
    });
  var response = "The line is currently: " + queue.join(", ");
  return response;
  }
}
  
  
  
