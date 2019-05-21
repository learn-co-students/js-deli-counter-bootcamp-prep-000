var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  var num = line.length;
  return `Welcome, ${name}. You are number ${num} in line.`;
}

function nowServing(line) {
  if(line.length >= 1) {
    var sentence = `Currently serving ${line[0]}.`;
    line.splice(0,1);
    return sentence;
  } else {
    return 'There is nobody waiting to be served!';
  }
}


function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty.";
  } else {
    var count = []
    line.forEach(function(name,index) {
        var num = index + 1;
         count.push(` ${num}. ${name}`);
       })
       return "The line is currently:" + count;
  }
}
