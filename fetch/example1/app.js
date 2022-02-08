/*jshint esversion: 6 */

/* global console*/
fetch('https://api-to-call.com/endpoint')
    .then(
        (response) => {
            console.error(response);

            if (response.ok) {
                return response.json();

            }

            throw new Error('Request failed!');
        },
        (networkError) => {
            console.log(networkError.message);
        })
    .then(
        (jsonResponse) => {
            return jsonResponse;
        }
    );
