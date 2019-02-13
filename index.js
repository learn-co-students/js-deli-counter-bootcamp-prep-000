takeANumber = (line, name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

nowServing = line => {
  if (!line.length) return "There is nobody waiting to be served!";
  let currentCustomer = line[0];
  line.splice(0, 1);
  return `Currently serving ${currentCustomer}.`;
};

currentLine = line => {
  if (!line.length) return "The line is currently empty.";
  let information = "The line is currently: ";
  let currentLine = "";
  line.map((element, index) => {
    if (index + 1 === line.length) {
      currentLine += `${index + 1}. ${element}`;
    } else {
      currentLine += `${index + 1}. ${element}, `;
    }
  });
  return (information += currentLine);
};
