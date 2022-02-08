/*jshint esversion: 8 */

/* global console*/

const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';
const responseField = document.querySelector('#responseField');
const jsonResponseField = document.querySelector('#jsonResponseField');
const rawResponseField = document.querySelector('#rawResponseField');

const renderRawResponse = (res) => {
    "use strict";
    // Takes the first 10 words from res
    let trimmedResponse = res.slice(0,
                                    10);
    // Manipulates responseField to render the unformatted response
    rawResponseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;

    return res;
};

const renderResponse = (res) => {
    "use strict";
    // Handles if res is falsey
    if (!res) {
        console.log(res.status);
    }
    // In case res comes back as a blank array
    if (!res.length) {
        responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
        return;
    }

    // Creates an empty array to contain the HTML strings
    let wordList = [];
    // Loops through the response and caps off at 10
    for (let i = 0; i < Math.min(res.length,
                                 10); i++) {
        // creating a list of words
        wordList.push(`<li>${res[i].word}</li>`);
    }
    // Joins the array of HTML strings into one string
    wordList = wordList.join("");

    // Manipulates responseField to render the modified response
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;

    return res;
};

const renderJsonResponse = (res) => {
    "use strict";
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {};
    for (let key in res) {
        rawJson[key] = res[key];
    }
    // Converts JSON into a string and adding line breaks to make it easier to read
    rawJson = JSON.stringify(rawJson)
                  .replace(/,/g,
                           ", \n");
    // Manipulates responseField to show the returned JSON.
    jsonResponseField.innerHTML = `<pre>${rawJson}</pre>`;

    return res;
};

const getSuggestions = () => {
    "use strict";
    const wordQuery = 'dog';
    const endpoint = `${url}${queryParams}${wordQuery}`;

    fetch(endpoint,
          {cache: 'no-cache'})
        .then(response => {
                  console.log(response);

                  if (response.ok) {
                      return response.json();
                  }

                  throw new Error('Request failed!');
              },
              networkError => {
                  console.log(networkError.message);
              })
        .then(jsonResponse => {
            return renderRawResponse(jsonResponse);
        })
        .then(jsonResponse => {
            return renderResponse(jsonResponse);
        })
        .then(jsonResponse => {
            renderJsonResponse(jsonResponse);
        });
};

getSuggestions();
