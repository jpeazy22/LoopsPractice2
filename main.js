var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	for(var i = 0 ; i < animals.length; i++){
	console.log(animals[i]);
	}
	console.log(" ");

 //var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	var popped = animals.pop()
	for(var i = 0 ; i < animals.length; i++){
	console.log(animals[i]);
	}
	console.log(" ");

	var add = animals.push('ocelot');
	var removed = animals.splice(1,1);
	var removed = animals.splice(2,1);

	for(var i = 0; i < animals.length; i++){
	console.log(animals[i]);
	}
	console.log(" ");

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	animals.reverse();
	for(var i = 0; i < animals.length; i++){
		console.log(animals[i]);
	}
console.log(" ");

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
	for(var i = 0; i < animals.length; i++){
	if (i === 0){
		console.log(animals[i]);

	}
	else if (i === animals.length -1){
		console.log(animals[i]);
	}
	else
		{
		console.log(animals[i]);
		console.log(animals[i]);
		}
	};