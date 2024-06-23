document.addEventListener('DOMContentLoaded', (event) => {
const wordsOriginal = ["a", "about", "afternoon", "and", "apple", "are", "bananas", "birds", "blue", "book", "busy", "by", "cat", "city", "clouds", "coffee", "cold", "comes", "dark", "day", "do", "dogs", "down", "early", "eat", "evening", "flies", "flowers", "for", "from", "garden", "get", "goes", "good", "green", "have", "here", "house", "in", "is", "it", "jump", "just", "lamp", "late", "light", "like", "little", "morning", "mouse", "music", "my", "night", "of", "old", "on", "orange", "outside", "people", "play", "rain", "red", "room", "run", "see", "sings", "sky", "sleep", "small", "snow", "stars", "sun", "sweet", "swim", "takes", "tea", "the", "their", "this", "time", "to", "tree", "under", "up", "very", "walk", "water", "we", "when", "white", "with", "yellow", "you"
];
let generatedWords = [];


const generateWords = () => {
    let generate = Math.floor(Math.random() * wordsOriginal.length);
    console.log(generate);
    if (!generate) {
        generate = Math.floor(Math.random() * wordsOriginal.length);
        console.log(generate);
    };

    for (let i = 0; i < generate; i++) {
        let generation = Math.floor(Math.random() * wordsOriginal.length);
        let word = wordsOriginal[generation];
        generatedWords.push(word);
    };
};

let words = document.getElementById('words');
const original = words.innerText;

let buttonClick = () => {

    if (words.innerText !== original) {
        generatedWords = [];
    };

    generateWords();
    words.innerText = generatedWords.join(' ');
    words.style.opacity = 1.0;
};
let buttonAction = document.querySelector('button');

buttonAction.onclick = buttonClick;

});