function takeANumber (array, name) {
  array.push(name);
  return String ("Welcome, " + name + ". You are number " + (array.length) + " in line.");
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return ("Currently serving " + katzDeliLine.shift() + ".")
  }else{
      return String ("There is nobody waiting to be served!");
  }
}
