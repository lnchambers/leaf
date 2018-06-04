$( document ).ready(function() {
  console.log( "Execute order 66" );

  $('.nav-login-link').on('click', enterLoginNinja);
  $('.nav-about-link').on('click', enterAboutNinja);
  $('.logo').on('click', exitNinja);
  $('.content').on('click', takePictureNinja);
  $('.content').on('click', getPictureResultsNinja);
  $('.submit-button').on('click', loginNinja);
  $('.triangle-up').click( () => {
    // Pull up the triangle to show information on plants
  });
});

function enterLoginNinja() {
  if ( $('.header').hasClass('fill') ) {
    $('.logo').removeClass('logo-about-position')
    $('.logo').addClass('logo-login-position')
    $('.login-form').addClass('show login-position')
    $('.about').removeClass('show')
  } else {
    $('.content').animate({opacity: 0}, 500)
    $('.header').animate({height: "69vh"}, 750, () => {
      $('.header').addClass('fill')
      $('.logo').html('<img src="https://i.imgur.com/Yo4kvcL.png" />')
      $('.main').addClass('main-position')
      $('.about').removeClass('show')
      $('.logo').addClass('logo-login-position')
      $('.login-form').addClass('show login-position')
    })
  }
};

function enterAboutNinja() {
  if ( $('.header').hasClass('fill') ) {
    $('.login-form').removeClass('show')
    $('.logo').removeClass('logo-login-position')
    $('.logo').addClass('logo-about-position')
    $('.about').addClass('show about-position')
  } else {
    $('.content').animate({opacity: 0}, 500)
    $('.header').animate({height: "69vh"}, 750, () =>{
      $('.header').addClass('fill')
      $('.logo').html('<img src="https://i.imgur.com/Yo4kvcL.png" />')
      $('.main').addClass('main-position')
      $('.login-form').removeClass('show')
      $('.logo').addClass('logo-about-position')
      $('.about').addClass('show about-position')
    });
  };
};

function exitNinja() {
  $('.header').animate({height: "14vh"}, 750, () => {
    $('.content').animate({opacity: 1}, 300)
    $('.header').removeClass('fill')
    $('.logo').html('<img src="https://i.imgur.com/8ex0RmM.png" />')
    $('.main').removeClass('main-position')
    $('.logo').removeClass('logo-about-position')
    $('.logo').removeClass('logo-login-position')
    $('.about').removeClass('show')
    $('.login-form').removeClass('show')
  });
};

function takePictureNinja() {

};

function getPictureResultsNinja() {
  fetch(`https://bauth.blippar.com/token?grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let accessToken = json.access_token
      let tokenType = json.token_type

      return fetch("https://bapi.blippar.com/v1/imageLookup", {
        method: "POST",
        body: JSON.stringify({input_image: "kawaii.jpg"}),
        header: {
          "Content-Type": "multipart/form-data; boundary=leafom",
          "Authorization": tokenType + " " + accessToken
        },
        mode: 'no-cors'
      })
    })
    .then((response) => {
      console.log(response.body)
    })
};
