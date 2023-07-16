const quotes = [{
        'author': 'Maya Angelou',
        'quote': 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {
        'author': 'Oscar Wilde',
        'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever.'
    },
    {
        'author': 'Ralph Waldo Emerson',
        'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
    },
    {
        'author': 'Andre Gide, Autumn Leaves',
        'quote': 'It is better to be hated for what you are than to be loved for what you are not.'
    },
];

var randomOld = 0;

function generateQuote() {
    var random = Number.parseInt(Math.random() * quotes.length - 1 + 1);
    if (randomOld === random) {
        do {
            random = Number.parseInt(Math.random() * quotes.length - 1 + 1);
        } while (randomOld === random)
    }
    document.querySelector('#quote').textContent = `\"${quotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${quotes[random].author}`;
    randomOld = random;
}