const number = [1, 2, 3, 4, 5];
const sum = number.reduce((total, num) => total + num, 0);
console.log(sum);

const scores = [90, 80, 70, 60];
const maxScore = scores.reduce((max, score) => Math.max(max, score), scores[0]);
console.log(maxScore);

const words = ["Hello", " ", "World", "!"];
const sentence = words.reduce((str, word) => str +" "+ word, "");
console.log(sentence);

const cart=[
    {
        item:"book",price:20,quantity:2},
        {item:"pen",price:3,quantity:5},
        {item:"NoteBook",price:8,quantity:1}
];
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log(total);