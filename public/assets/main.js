$( document ).ready(function() {
  console.log( "Execute order 66" );

  $('.nav-login-link').on('click', enterLoginNinja);
  $('.nav-about-link').on('click', enterAboutNinja);
  $('.logo').on('click', exitNinja);
  $('.close').on('click', triangleDown)
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let url = 'https://intense-thicket-27380.herokuapp.com/plants';
  fetch(proxy + url)
    .then((response) => {
      $('.content').empty()
      return response.json()
    })
    .then((json) => {
      json.forEach((plant) => {
        $('.content').append(
          `<section class="content-card">
            <section class="content-card-img" id=${plant.id}>
              <img src="${plant.img}.jpg" />
            </section>
          </section>`
        );
        $(`#${plant.id}`).on('click', getShowPlantNinja)
      })
    });
  $('.submit-button').on('click', loginNinja);
});

function enterLoginNinja() {
  if ( $('.nav-login-link').hasClass('logout')) {
    return logoutNinja();
  };
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

function loginNinja() {
  let username = "O"
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let url = `https://intense-thicket-27380.herokuapp.com/users?username=${username}`;
  fetch(proxy + url)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      alert(`Welcome, ${json[0].name}`)
      $('.nav-login-link').html("<p>Logout</p>")
      $('.nav-login-link').addClass('logout')
      $('.form-field').empty()
      exitNinja()
    });
};

function logoutNinja() {
  alert("You have logged out")
  $('.nav-login-link').html("<p>Login</p>")
  $('.nav-login-link').removeClass('logout')
  exitNinja()
};

function getShowPlantNinja() {
  console.log(this)
  $('.content').animate({opacity: 0}, 300)
  $('.content').addClass('hide')
  triangleUp()
  $('.shown').animate({opacity: 1}, 500)
  $('.shown').addClass('front')
  let taxId = "4p9gjzad"
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let url = `https://intense-thicket-27380.herokuapp.com/plants/${this.id}`;
  fetch(proxy + url)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      $('.shown').html(
        `<section class="content-card">
          <section class="content-card-img" id=${json.id}>
            <img src="${json.img}.jpg" />`
      );
    })
    .then(() => {
      return fetch(`https://api.oakparks.org/v1/taxa/${taxId}/props`)
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      $('.shown').append('Plants with these leaves are typically found in ')
      json.data[13].attributes.value.forEach((state) => {
        $('.shown').append(`${state}, `)
      })
      $('.shown').append('.')
    })
};

function triangleUp() {
  $('.close').removeClass('hide')
  $('.triangle-up').addClass('slip-up')
};

function triangleDown() {
  $('.shown').empty()
  $('.shown').removeClass('front')
  $('.content').removeClass('hide')
  $('.content').animate({opacity: 1}, 300)
  $('.close').addClass('hide')
  $('.triangle-up').removeClass('slip-up')
};
