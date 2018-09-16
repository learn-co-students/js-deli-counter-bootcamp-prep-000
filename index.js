function takeANumber(line, name){
  line.push(name)
  var num = line.length;
  return `Welcome, ${name}. You are number ${num} in line.`;
}
function nowServing(line){
  if(line.length == 0){
    return "There is nobody waiting to be served!";
  } else{
    var removed = line.splice(0,1);
    return `Currently serving ${removed}.`;
  }
}
function currentLine(line){
  var ans = []
  if (line.length == 0){
    return "The line is currently empty."
  } else{
    for (var i =1; i <= line.length; i++){
      ans.push(i +". " + line[i-1]);
    }
      return "The line is currently: " + ans.join(', ');
    }
  }