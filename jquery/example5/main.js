/*jshint esversion: 6 */

/* global console*/
$(document).ready(() => {
    console.log("ready!");
    $('#text').on('keyup',
                  (event) => {
                      const value = $(event.currentTarget).val();
                      console.log(`Typed: ${value}`);
                      $('.preview').html(value);
                  });

    $('#font').on('change',
                  (event) => {
                      const value = $(event.currentTarget).val();
                      console.log(`Typed: ${value}`);
                      $('.preview').css('font-family',
                                        value);
                  });

    $('#weight').on('change',
                    (event) => {
                        const value = $(event.currentTarget).val();
                        console.log(`Typed: ${value}`);
                        $('.preview').css('font-weight',
                                          value);
                    });

    $('#size').on('keyup',
                  (event) => {
                      const value = $(event.currentTarget).val();
                      console.log(`Typed: ${value}`);
                      $('.preview').css('font-size',
                                        value + "px");
                  });
});
