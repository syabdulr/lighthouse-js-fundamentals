const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// While loop
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// For loop
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// Backwards loop (using a for loop)
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}