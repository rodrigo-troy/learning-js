/*jshint esversion: 6 */

/* global console*/
let main = function () {
    $('.more-btn').on('click',
                      (event) => {
                          $(event.currentTarget).siblings().toggle();
                      });

    $('.share').on('click',
                   (event) => {
                       $(event.currentTarget).next().toggle();
                   });

    $('.notification').on('click',
                          (event) => {
                              $(event.currentTarget).toggleClass('active');
                          });
};

$(document).ready(main);
