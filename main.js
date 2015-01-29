


var students = [{
	name: 'Liz',
	age: 25,
	city: 'Boulder'
},{
	name: 'Meghan',
	age: 27,
	city: 'Denver'
},{
	name: 'Trent',
	age: 32,
	city: 'Boulder'
},{
	name: 'Chelsea',
	age: 24,
	city: 'Boulder'
},{
	name: 'Amir',
	age: 18,
	city: 'Denver'
}];


// #1 

// 25
// 27
// 32
// 24
// 18

console.log('_list of ages:\n', _.pluck(students, 'age').join('\n'));


// #2

// Liz, Boulder
// Meghan, Denver
// Trent, Boulder
// Chelsea, Boulder
// Amir, Denver

console.log('_name and city:\n', _.map(students, function(student){
	return student.name + ", " + student.city + "\n";
}).join(''));


// #3

// Liz is from Boulder
// Trent is from Boulder
// Chelsea is from Boulder

console.log('_name is from:\n', _.map(students, function(student){
	return student.name + ' is from ' + student.city + '\n';
}).join(''));


// #4

// Meghan is older than 25
// Trent is older than 25

var olderThan25 = function(student){
	return student.age > 25;
};

var fromObject = function(objs){
	return objs.name + ' is older than 25\n';
};

console.log('_people older than 25', _.filter(students, olderThan25).map(fromObject).join(''));




