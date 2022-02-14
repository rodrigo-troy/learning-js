/*jshint esversion: 6 */

/* global console*/
$(document).ready(() => {
    $('.postText').focus();

    $('.menu').on('mouseenter',
                  () => {
                      $('.nav-menu').show();
                  });

    $('.nav-menu').on('mouseleave',
                      () => {
                          $('.nav-menu').hide();
                      });

    $('.btn').on('mouseenter',
                 (event) => {
                     $(event.currentTarget).addClass('btn-hover');
                 })
             .on('mouseleave',
                 (event) => {
                     $(event.currentTarget).removeClass('btn-hover');
                 })
             .on('click',
                 (event) => {
                     $(event.currentTarget).animate({
                                                        color: '#EFEFEF',
                                                        backgroundColor: '#303030',
                                                        fontSize: '18px'
                                                    },
                                                    200);
                 });

    $('.postText').on('keyup',
                      (event) => {
                          const post = $(event.currentTarget).val();
                          const remaining = 140 - post.length;
                          $('.nav-menu').hide();
                          $('.characters').html(remaining);

                          if (remaining <= 0) {
                              $('.characters').addClass('red');
                          } else {
                              $('.characters').removeClass('red');
                          }
                      });
});
