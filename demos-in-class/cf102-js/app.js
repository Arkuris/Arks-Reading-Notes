function sayName(greeting) {
  let name = 'Jacob';
  
  document.write(greeting + name)
  return name; 
}

// sayName('Hello')

function whatTimeIsIt(militaryTime, dayOfWeek){
// camel case naming
  if (militaryTime < 12) {
    document.write('It is ' + dayOfWeek + ' morning') 
  } else if (militaryTime > 23){
    document.write('This is not a valid time unit')
  } else {
    document.write('it is ' + dayOfWeek + ' in the afternoon/evening');
  }
}

