function takeANumber(deliline, newperson) {
  deliline.push(newperson);
  var pos = deliline.indexOf(newperson) + 1;
  return ("Welcome, " + newperson + ". You are number " + pos + " in line.");
}

function nowServing(deliline) {
  if (deliline.length === 0) {
    return ("There is nobody waiting to be served!");
  } else {return("Currently serving " + deliline.shift() +".");
    }
}

function currentLine (deliline) {
  if (deliline.length === 0) {
    return ("The line is currently empty.");
  } else {
      let i = 1;
      var currentlinelist = [];
      while (i<deliline.length+1) {
        currentlinelist.push(" " + i + ". " + deliline[i-1]);
        i++;
      }
    return("The line is currently:" + currentlinelist);
    }
}
