$( document ).ready(function() {
  console.log( "ready!" );
  $('.nav-login-link').click(() => {
    console.log('oh hello there')
  });

  $('.nav-about-link').click(() => {
    console.log('about')
  });

  $('.logo').on('click', () => {
    console.log('This is the logo')
  });
});
