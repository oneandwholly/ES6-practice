var colors= [ 'red', 'blue', 'green' ];

colors.forEach(function(color) {
	console.log(color);
});

// Create an array of numbers
var numbers = [1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
	sum += number;
}
// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// Print the sum variable
sum;

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach(function(post) {
       savePost(post);
    });
}

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
   areas.push(image.height*image.width);
});
