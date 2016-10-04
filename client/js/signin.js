(function () {
  console.log('sign in sanity check!');
  $('#signInButton').on('click', function (e) {
      e.preventDefault();
      const userPayload = {
        email: $('#sign_in_email').val(),
        password: $('#sign_in_password').val()
      };
      $.ajax({
        type: 'POST',
        url: '/users/signin',
        data: userPayload
      })
      .done((data) => {
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('first_name', data.first_name);
        sessionStorage.setItem('is_admin', data.is_admin);
        window.location.href = '/';
      });
    });
})();
