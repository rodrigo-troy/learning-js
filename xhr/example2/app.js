/*jshint esversion: 8 */

/* global console*/
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';
const responseField = document.querySelector('#responseField');

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

const getSuggestions = () => {
    "use strict";
    const wordQuery = 'dog';
    const topicQuery = 'animal';
    const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    };

    xhr.open('GET',
             endpoint);
    xhr.send();
};

getSuggestions();
