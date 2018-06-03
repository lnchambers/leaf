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
    $('.logo').addClass('logo-about-position')
    $('.content').addClass('hide')
    $('.main').addClass('main-position')
  };
  if ( $('.about').hasClass('show') ) {
    $('.about').removeClass('show')
  };
  $('.logo').removeClass('logo-about-position')
  $('.logo').addClass('logo-login-position')
  $('.login-form').addClass('show login-position')
};

function enterAboutNinja() {
  if ( $('.header:not(.fill)') ) {
    $('.header').addClass('fill')
    $('.logo').empty()
    $('.logo').append('<img src="https://i.imgur.com/Yo4kvcL.png" />')
    $('.logo').addClass('logo-about-position')
    $('.content').addClass('hide')
    $('.main').addClass('main-position')
  };
  if ( $('.login-form').hasClass('show') ) {
    $('.login-form').removeClass('show')
  };
  $('.logo').removeClass('logo-login-position')
  $('.logo').addClass('logo-about-position')
  $('.about').addClass('show about-position')
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
  $('.logo').removeClass('logo-about-position')
  $('.logo').removeClass('logo-login-position')
  $('.main').removeClass('main-position')
}
