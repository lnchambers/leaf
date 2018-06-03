$( document ).ready(function() {
  console.log( "Execute order 66" );

  $('.nav-login-link').on('click', enterLoginNinja);
  $('.nav-about-link').on('click', enterAboutNinja);
  $('.logo').on('click', exitNinja)

  $('.content')
    // Load's content partials

  $('.triangle-up').click( () => {
    // Pull up the triangle to show information on plants
  });
});

function enterLoginNinja() {
  if ( $('.header:not(.fill)') ) {
    $('.header').addClass('fill')
    $('.logo').empty()
    $('.logo').append('<img src="https://i.imgur.com/Yo4kvcL.png" />')
    $('.content').addClass('hide')
  };
  if ( $('.about').hasClass('show') ) {
    $('.about').removeClass('show')
  };
  if ( $('.login-form:not(.show)') ) {
    $('.login-form').addClass('show')
  };
};

function enterAboutNinja() {
  if ( $('.header:not(.fill)') ) {
    $('.header').addClass('fill')
    $('.logo').empty()
    $('.logo').append('<img src="https://i.imgur.com/Yo4kvcL.png" />')
    $('.content').addClass('hide')
  };
  if ( $('.login-form').hasClass('show') ) {
    $('.login-form').removeClass('show')
  };
  if ( $('.about:not(.show)') ) {
    $('.about').addClass('show')
  };
};

function exitNinja() {
  if ( $('.header').hasClass('fill') ) {
    $('.header').removeClass('fill')
  };
  if ( $('.about').hasClass('show') ) {
    $('.about').removeClass('show')
  };
  if ( $('.login-form').hasClass('show') ) {
    $('.login-form').removeClass('show')
  };
  $('.logo').empty()
  $('.logo').append('<img src="https://i.imgur.com/8ex0RmM.png" />')
  $('.content').removeClass('hide')
}
