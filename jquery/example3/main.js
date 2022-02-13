$(document).ready(() => {
    $('.hint-box').on('click',
                      () => {
                          $('.hint').slideToggle(500);
                      });

    $('.wrong-answer-one').on('click',
                              () => {
                                  $('.wrong-text-one').fadeOut('fast');
                                  $('.frown').show();
                              });

    $('.wrong-answer-two').on('click',
                              () => {
                                  $('.wrong-text-two').fadeOut('fast');
                                  $('.frown').show();
                              });

    $('.wrong-answer-three').on('click',
                                () => {
                                    $('.wrong-text-three').fadeOut('fast');
                                    $('.frown').show();
                                });

    $('.correct-answer').on('click',
                            () => {
                                $('.frown').fadeOut('fast');
                                $('.smiley').show();
                            });
});
