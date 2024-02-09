// Task 1
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy(product) {
    for (products of product) {
        console.log(products);
    }
}

logDairy(dairy);
// Task 2
const animal = {
    canjump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
// Task 3

function birdCan(animal) {
    for (props of Object.keys(animal)) {
        console.log(props + ": " + animal[props]);
    }

}

birdCan(bird);

function animalCan(animal) {
    for (animals in animal) {
        console.log(animals + ": " + animal[animals]);
    }
}

animalCan(bird);