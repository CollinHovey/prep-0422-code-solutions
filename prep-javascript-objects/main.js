const person = { firstName: 'Collin', lastName: 'Hovey', hobby: 'Video Games' };
console.log(person);
const fullName = person.firstName + '' + person.lastName;
console.log("This person's full name is", fullName);
person.job = 'Server';
console.log("This person's current job is", person.job);
person.previousJob = 'Cashier';
console.log("This person's previous job was", person.previousJob);
console.log(person);
