$( document ).ready(function() {
  console.log( "Execute order 66" );

  $('.nav-login-link').on('click', enterNinja);
  $('.nav-about-link').on('click', enterNinja);

  $('.logo').click( () => {
    // Reset CSS back to the original home page.
  });

  $('.content')
    // Load's content partials

  $('.triangle-up').click( () => {
    // Pull up the triangle to show information on plants
  });
});

function enterNinja() {
  $('header').slideDown('slow', function() {
    $('header').addClass('fill')
    $('.triangle-up').toggleClass('z-backward')
  })
};