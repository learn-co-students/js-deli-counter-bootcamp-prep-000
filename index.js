function takeANumber(line,name){
  if(line.indexOf(name) === -1) {
    line.push(name);
  }
  return `Welcome, ${name}. You are number ${line.indexOf(name)+1} in line.`
}
