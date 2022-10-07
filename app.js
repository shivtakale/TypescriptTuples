var cl = console.log;
//TUPles >> fixed length array
var person = {
    name: "jhon",
    age: 37,
    hobbies: ['cricket', 'coding', "cooking"],
    role: [2, 'admin']
};
// person.role[2]= ''
// person.role.push(10);
// person.role.push('true')
cl(person.role);
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// define our tuple
var ourTuple1;
// initialized incorrectly which throws an error
// ourTuple1 = [false, 'Coding God was mistaken', 5];
