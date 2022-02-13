/*jshint esversion: 6 */

/* global console*/
$(document).ready(() => {
    $('.hint-box').on('click',
                      () => {
                          $('.hint').slideToggle(500);
                      });

    $('.wrong-answer-one').on('click',
                              () => {
                                  $('.wrong-text-one').fadeOut('fast');
                                  $('.frown').show();
                                  $('.smiley').hide();
                              });

    $('.wrong-answer-two').on('click',
                              () => {
                                  $('.wrong-text-two').fadeOut('fast');
                                  $('.frown').show();
                                  $('.smiley').hide();
                              });

    $('.wrong-answer-three').on('click',
                                () => {
                                    $('.wrong-text-three').fadeOut('fast');
                                    $('.frown').show();
                                    $('.smiley').hide();
                                });

    $('.correct-answer').on('click',
                            () => {
                                $('.frown').fadeOut('fast');
                            })
                        .on('click',
                            () => {
                                setTimeout(() => {
                                               $('.smiley').fadeIn(500);
                                           },
                                           500);
                            });

    $('div').on('mouseenter',
                (event) => {
                    $(event.currentTarget).addClass('borderRed');
                })
            .on('mouseleave',
                (event) => {
                    $(event.currentTarget).removeClass('borderRed');
                });
});
