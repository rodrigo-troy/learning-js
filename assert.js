/*jshint esversion: 6 */

/* global console*/
function assert(value, text) {
    "use strict";
    let li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(text));

    let results = document.getElementById("results");
    if (!results) {
        results = document.createElement("ul");
        results.setAttribute('id', 'results');
        document.body.appendChild(results);
    }

    results.appendChild(li);
}

function pass(text) {
    "use strict";
    assert(true, text);
}

function fail(text) {
    "use strict";
    assert(false, text);
}

function report(text) {
    "use strict";
    pass(text);
}
