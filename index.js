const katzDeliLine = [];

const takeANumber = (line, name) => {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`;
};

const nowServing = (line) => {
  const customer = line.slice(0, 1);
  line.shift();
  return customer.length > 0 ? `Currently serving ${customer}.` : 'There is nobody waiting to be served!';
};

const currentLine = (line) => {
  let status = 'The line is currently';
  status += line.length > 0 ? ': ' : ' empty.';

  for (let i = 0; i < line.length; i++) {
    status += `${i+1}. ${line[i]}`
    if (i != line.length - 1) {
      status += ', ';
    }
  }
  return status;
};
