/*jshint esversion: 8 */

/* global console*/
const responseField = document.querySelector('#responseField');

const xhr = new XMLHttpRequest();
const url = 'https://api.datamuse.com/words?rel_rhy=dogs';

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
    "use strict";
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return renderResponse(xhr.response);
    }
};

const renderResponse = (res) => {
    "use strict";
    if (!res) {
        console.log(res.status);
    }

    if (!res.length) {
        responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
        return;
    }

    let wordList = [];
    for (let i = 0; i < Math.min(res.length,
                                 10); i++) {
        wordList.push(`<li>${res[i].word}</li>`);
    }

    wordList = wordList.join("");

    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
};

xhr.open('GET',
         url);

xhr.send();
